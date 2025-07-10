interface TopButtonProps {
  onClick: () => void;
}

export default function TopButton({ onClick }: TopButtonProps) {
  return (
    <button
      type="button"
      className="fixed bottom-[115px] right-[16px] w-[48px] h-[48px] bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center z-50 hover:bg-gray-50 transition-colors"
      onClick={onClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4L12 20M12 4L8 8M12 4L16 8"
          stroke="#333"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
} 