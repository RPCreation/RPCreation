export default function SectionOrder({ order, setResume }) {
  const onDragStart = (e, index) => e.dataTransfer.setData('index', String(index));
  const onDrop = (e, toIndex) => {
    const fromIndex = Number(e.dataTransfer.getData('index'));
    if (Number.isNaN(fromIndex) || fromIndex === toIndex) return;
    setResume((prev) => {
      const next = [...prev.sectionOrder];
      const [moved] = next.splice(fromIndex, 1);
      next.splice(toIndex, 0, moved);
      return { ...prev, sectionOrder: next };
    });
  };

  return (
    <div className="card p-4">
      <h3 className="font-semibold mb-2">Drag & Drop Section Order</h3>
      <div className="space-y-2">
        {order.map((section, idx) => (
          <div
            key={section}
            draggable
            onDragStart={(e) => onDragStart(e, idx)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => onDrop(e, idx)}
            className="cursor-move rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm capitalize"
          >
            {section}
          </div>
        ))}
      </div>
    </div>
  );
}
