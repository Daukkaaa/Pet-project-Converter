const styles = {
    control: (baseStyles) => ({
      ...baseStyles,
      padding: "0 10px",
      fontSize: "20px",
      border: "1px solid rgb(3, 1, 47)",
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
      color: 'rgb(3, 1, 47)'
    }),
};

export default styles;