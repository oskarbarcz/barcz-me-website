export default function Anchor() {
  return {
    root: {
      top: "",
      technology: "technology",
      conferences: "conferences"
    },

    getAnchorUrl(anchor) {
      return "#" + anchor;
    }
  }
}
