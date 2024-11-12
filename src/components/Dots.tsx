export default function Dots({ count }: { count: number }) {
  const dots = [];
  for (let i = 0; i < count; i++) {
    dots.push(<button>.</button>);
  }

  return dots.map((d) => d);
}
