export default function Anchor() {
  return {
    root: {
      top: "",
      achievements: "achievements",
      technology: "technology",
      conferences: "conferences"
    },

    getAnchorUrl(anchor: string) {
      return "#" + anchor;
    }
  }
}
