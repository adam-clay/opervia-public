import './AmbientShapes.scss';

interface AmbientShapesProps {
  variant?: 'light' | 'dark';
  count?: number;
}

const AmbientShapes = ({ variant = 'light', count = 5 }: AmbientShapesProps) => {
  const shapes = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: 6 + Math.random() * 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 20 + Math.random() * 25,
    delay: Math.random() * -20,
    type: i % 3 === 0 ? 'circle' : i % 3 === 1 ? 'ring' : 'dot',
  }));

  return (
    <div className={`ambient-shapes ambient-shapes--${variant}`} aria-hidden="true">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`ambient-shape ambient-shape--${shape.type}`}
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            animationDuration: `${shape.duration}s`,
            animationDelay: `${shape.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AmbientShapes;
