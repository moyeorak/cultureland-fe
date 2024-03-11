interface TabButtonProps {
  title: string;
  active: boolean;
  onClick: () => void; // 클릭 이벤트 핸들러 타입 추가
}

function TabButton({ title, active, onClick }: TabButtonProps) {
  return (
    <button
      className={`text-fs-16 font-bold ${
        active ? "text-user-theme-90" : "text-neutral-40"
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default TabButton;
