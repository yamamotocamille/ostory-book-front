// == Import
import AnimatedCursor from "react-animated-cursor"

// == Component
function AnimCursor() {
  return (
    <AnimatedCursor
      innerSize={30}
      outerSize={70}
      color='241, 209, 128'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={2.5}
      clickables={[
        'a',
        'button',
        '.link'
      ]}

    />
  );
}

// == Export
export default AnimCursor;
