export function Input({ placeholder, className = '', startIcon }) {
    return (
      <div className={`flex items-center border rounded px-3 py-2 ${className}`}>
        {startIcon && <span className="mr-2">{startIcon}</span>}
        <input type="text" placeholder={placeholder} className="flex-1 outline-none" />
      </div>
    );
  }