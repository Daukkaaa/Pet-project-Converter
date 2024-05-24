const styles = {
    control: (baseStyles) => ({
      ...baseStyles,
      padding: "0 10px",
      fontSize: "20px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      width: "100%", 
      display: "flex",
      alignItems: "center",
      height: "70px", 
      boxSizing: "border-box",
    }),
    singleValue: (baseStyles) => ({
      ...baseStyles,
      display: "flex",
      alignItems: "center",
      paddingRight: "200px", 
    }),
    indicatorSeparator: (baseStyles) => ({
      ...baseStyles,
      display: "none",
    }),
    dropdownIndicator: (baseStyles) => ({
      ...baseStyles,
      padding: "0",
    }),
};

export default styles;