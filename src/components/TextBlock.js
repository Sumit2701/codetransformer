export const TextBlock = ({
    text,
    editable = false,
    onChange = () => {},
  }) => {
    return (
      <textarea
      className="min-h-[500px] w-full bg-[#1A1B26] p-4 text-[15px] text-neutral-200 focus:outline-none"
        style={{ resize: 'none' }}
        value={text}
        onChange={(e) => onChange(e.target.value)}
        disabled={!editable}
      />
    );
  };