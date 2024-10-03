const ClipSpan = ({ className = '', children }) => (
  <span
    className={`text-white
        ${className}`}
  >
    {children}
  </span>
);

export default ClipSpan;
