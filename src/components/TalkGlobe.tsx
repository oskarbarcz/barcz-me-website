import type {CSSProperties} from "react";
import {geoGraticule, geoOrthographic, geoPath} from "d3-geo";
import {feature} from "topojson-client";
import type {Topology, GeometryCollection} from "topojson-specification";
import land110m from "world-atlas/land-110m.json";

/*
 * A still orthographic globe with one city marked, and thin leaders from the city to photos taken there.
 * Everything is laid out in a 600 × 560 composition: the globe on the left, the photos stacked on the right.
 * Below `sm` the composition falls apart into the globe followed by the photos (see Achievements.css).
 */

const WIDTH = 600;
const HEIGHT = 560;
/** Globe box inside the composition; the globe SVG has its own 400 × 400 view box */
const GLOBE = {x: 0, y: 100, size: 400};
const RADIUS = 196;
/** Photos: right column, 4:3, one at the top and one at the bottom */
const PHOTO = {left: 372, width: 228, height: 171, inset: 22};
const PHOTO_TOPS = [PHOTO.inset, HEIGHT - PHOTO.inset - PHOTO.height];

const topology = land110m as unknown as Topology<{land: GeometryCollection}>;
const land = feature(topology, topology.objects.land);
const graticule = geoGraticule().step([20, 20])();

interface Props {
  /** [longitude, latitude] */
  coordinates: [number, number];
  label: string;
  photos: {src: string, alt: string, caption: string}[];
}

export default function TalkGlobe({coordinates, label, photos}: Props) {
  // Turn the globe so the city sits a little right of and above the centre, facing the photos
  const projection = geoOrthographic()
    .rotate([-coordinates[0] + 12, -coordinates[1] + 16])
    .translate([GLOBE.size / 2, GLOBE.size / 2])
    .scale(RADIUS)
    .clipAngle(90);
  const path = geoPath(projection);
  const [cityX, cityY] = projection(coordinates) ?? [GLOBE.size / 2, GLOBE.size / 2];

  return (
    <div className="talk-map">
      <svg className="talk-map-globe" viewBox={`0 0 ${GLOBE.size} ${GLOBE.size}`} role="img" aria-label={label}>
        <defs>
          <radialGradient id="talk-globe-shade" cx="38%" cy="32%" r="70%">
            <stop offset="0%" stopColor="#fff"/>
            <stop offset="70%" stopColor="var(--color-gray-50)"/>
            <stop offset="100%" stopColor="var(--color-gray-200)"/>
          </radialGradient>
        </defs>
        <circle cx={GLOBE.size / 2} cy={GLOBE.size / 2} r={RADIUS} fill="url(#talk-globe-shade)"/>
        <path d={path(graticule) ?? undefined} fill="none" className="stroke-gray-200" strokeWidth={0.75}/>
        <path d={path(land) ?? undefined} className="fill-gray-300"/>
        <circle cx={GLOBE.size / 2} cy={GLOBE.size / 2} r={RADIUS} fill="none" className="stroke-gray-300" strokeWidth={1}/>

        <circle cx={cityX} cy={cityY} r={11} className="fill-brand-500" opacity={0.2}/>
        <circle cx={cityX} cy={cityY} r={4.5} className="fill-brand-600 stroke-white" strokeWidth={1.5}/>
        <text
          x={cityX - 16}
          y={cityY + 4}
          textAnchor="end"
          className="fill-gray-900 stroke-white font-mono text-[13px] font-medium"
          strokeWidth={4}
          paintOrder="stroke"
        >
          {label}
        </text>
      </svg>

      <svg className="talk-map-lines" viewBox={`0 0 ${WIDTH} ${HEIGHT}`} aria-hidden>
        {photos.map((photo, index) => {
          const y = PHOTO_TOPS[index] + PHOTO.height / 2;
          return (
            <g key={photo.src} className="stroke-brand-600">
              <line x1={GLOBE.x + cityX} y1={GLOBE.y + cityY} x2={PHOTO.left} y2={y} strokeWidth={1}/>
              <circle cx={PHOTO.left} cy={y} r={3} className="fill-brand-600" strokeWidth={0}/>
            </g>
          );
        })}
      </svg>

      {photos.map((photo, index) => (
        <figure
          key={photo.src}
          className="talk-map-photo relative overflow-hidden rounded-md bg-gray-100"
          style={{'--top': `${PHOTO_TOPS[index] / HEIGHT * 100}%`} as CSSProperties}
        >
          <img src={photo.src} alt={photo.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover"/>
          <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent px-3 pt-8 pb-2 font-mono text-xs font-medium text-white">
            {photo.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
