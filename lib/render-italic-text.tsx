export const renderItalicText = (text: string) => {
  const parts = text.split(/(scape|Digital Fluidity)/i); // Split the title by "scape" or "Digital Fluidity" (case-insensitive)
  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === 'scape' ||
        part.toLowerCase() === 'digital fluidity' ? (
          <em key={index}>{part}</em> // Render "scape" and "Digital Fluidity" in italic
        ) : (
          <span key={index}>{part}</span> // Render other parts normally
        )
      )}
    </>
  );
};
