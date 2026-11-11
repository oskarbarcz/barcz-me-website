// Shared stroke styles of the drawing
const BOX = "fill-white stroke-gray-700 [stroke-width:1.3] [stroke-linejoin:round]";
const LINE = "fill-none stroke-gray-700 [stroke-width:1.3]";
const WIRE = "fill-none stroke-gray-400 [stroke-width:1.1]";
const SLOT = "stroke-gray-400 [stroke-width:1.3] [stroke-linecap:round]";
const NODE = "fill-white stroke-brand-600 [stroke-width:1.4]";

/** A rack server with `units` stacked units, each with a status light and a drive slot. */
function Server({x, y, units}: {x: number; y: number; units: number}) {
  const height = 26;
  return (
    <g>
      <rect className={BOX} x={x} y={y} width={56} height={units * height} rx={4}/>
      {Array.from({length: units}, (_, i) => (
        <g key={i}>
          {i > 0 && <path className={LINE} d={`M${x} ${y + i * height} H${x + 56}`}/>}
          <circle className="fill-brand-600" cx={x + 10} cy={y + i * height + 13} r={2.2}/>
          <path className={SLOT} d={`M${x + 30} ${y + i * height + 13} H${x + 48}`}/>
        </g>
      ))}
    </g>
  );
}

/** A database cylinder centred on `cx`. */
function Database({cx, y, rx, ry, height, rings}: {cx: number; y: number; rx: number; ry: number; height: number; rings: number}) {
  const left = cx - rx;
  const right = cx + rx;
  return (
    <g>
      <path className={BOX} d={`M${left} ${y} V${y + height} A${rx} ${ry} 0 0 0 ${right} ${y + height} V${y}`}/>
      <ellipse className={BOX} cx={cx} cy={y} rx={rx} ry={ry}/>
      {Array.from({length: rings}, (_, i) => {
        const ringY = y + (height / (rings + 1)) * (i + 1);
        return <path key={i} className={LINE} d={`M${left} ${ringY} A${rx} ${ry} 0 0 0 ${right} ${ringY}`}/>;
      })}
    </g>
  );
}

/**
 * Line drawing of a small production setup: a region cloud with an edge cloud, a gateway behind a security check,
 * three servers, a queue, a primary database with a replica and a cache. Decorative only.
 */
export default function InfraDrawing({className = ""}: {className?: string}) {
  return (
    <svg className={className} viewBox="0 -14 320 276" aria-hidden focusable="false">
      {/* wires: region → gateway → servers → data bus → database and cache */}
      <path className={WIRE} d="M136 54 V76"/>
      <path className={WIRE} d="M136 98 V110 M44 110 H184 M44 110 V120 M114 110 V120 M184 110 V120"/>
      <path className={WIRE} d="M212 146 H232"/>
      <path className={WIRE} d="M44 172 V190 M114 172 V190 M184 172 V190 M44 190 H262 M96 190 V199 M262 190 V206"/>
      <path className={`${WIRE} [stroke-dasharray:3_3]`} d="M182 34 H252 M124 224 H150"/>

      {/* region cloud and a smaller edge cloud */}
      <path className={BOX} d="M96 54 H180 A18 18 0 0 0 177 18 A27 27 0 0 0 128 10 A20 20 0 0 0 96 54 Z"/>
      <path className={BOX} d="M252 46 H304 A12 12 0 0 0 302 22 A17 17 0 0 0 272 16 A13 13 0 0 0 252 46 Z"/>

      {/* gateway / load balancer */}
      <rect className={BOX} x={106} y={76} width={60} height={22} rx={11}/>
      <path className={LINE} d="M122 87 H150 M144 82 L150 87 L144 92"/>

      {/* security check on the way in */}
      <g transform="translate(144 54)">
        <path className="fill-brand-50 stroke-brand-600 [stroke-width:1.3]" d="M10 0 L19 3.5 V10 C19 16 15 20 10 22.5 C5 20 1 16 1 10 V3.5 Z"/>
        <path className="fill-none stroke-brand-600 [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round]" d="M6 11 L9 14 L14 7.5"/>
      </g>

      <Server x={16} y={120} units={2}/>
      <Server x={86} y={120} units={2}/>
      <Server x={156} y={120} units={2}/>

      {/* queue with two waiting messages */}
      <rect className={BOX} x={232} y={134} width={72} height={24} rx={4}/>
      <path className={LINE} d="M250 134 V158 M268 134 V158 M286 134 V158"/>
      <rect className="fill-brand-100" x={271} y={137} width={12} height={18} rx={2}/>
      <rect className="fill-brand-100" x={289} y={137} width={12} height={18} rx={2}/>

      {/* primary database with a replica */}
      <Database cx={96} y={206} rx={26} ry={7} height={42} rings={2}/>
      <Database cx={170} y={212} rx={18} ry={5} height={32} rings={1}/>

      {/* cache */}
      <rect className={BOX} x={242} y={206} width={40} height={40} rx={7}/>
      <path className="fill-brand-50 stroke-brand-600 [stroke-width:1.3] [stroke-linejoin:round]" d="M265 212 L253 229 H262 L259 240 L272 223 H263 Z"/>

      {/* junctions */}
      {[[136, 110], [114, 110], [114, 190], [184, 190], [96, 190], [262, 190]].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} className={NODE} cx={cx} cy={cy} r={3}/>
      ))}
    </svg>
  );
}
