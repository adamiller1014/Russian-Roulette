const CampaignsTableRow = ({ tRow }) => {
  // Avoid adding 'COPY' multiple times by checking first
  const addNew = [...tRow, 'COPY']; // Ensure 'COPY' is always last

  return (
    <div
      className="grid grid-cols-8 gap-1 bg-[#1c2127] text-center whitespace-nowrap"
      style={{ gridTemplateColumns: 'repeat(8, 1fr)' }}
    >
      {addNew.map((r, i) => (
        <div
          key={i}
          className={`px-[5px] py-[3px] justify-center items-center ${i !== 0 && i !== 3 && i !== 7 ? 'text-[#f8bf60]' : ''
            }`}
        >
          {/* Handle number formatting for specific columns */}
          {i === 1 || i === 2 || i === 3 || i === 5 || i === 6 ? (
            new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            })
              .format(r)
              .replace('$', '')
              .replace(/\..*/g, '')
          ) : (
            i === 4 ? r + '%' : i === 7 ? (
              <span
                className="text-black bg-[#f8bf60] p-[4px] rounded-[5px] whitespace-nowrap"
              >
                {r}
              </span>
            ) : r
          )}

        </div>
      ))}
    </div>
  );
};

export default CampaignsTableRow;
