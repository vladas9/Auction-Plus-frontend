export const formatEndDate = (endDate) => {
    if (!endDate) return "No end date available";
  
    try {
      const date = new Date(endDate);
      const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
      const formattedDate = date.toLocaleDateString('en-GB', dateOptions);
      const formattedTime = date.toLocaleTimeString('en-GB', timeOptions);
      return `${formattedDate} ${formattedTime}`;
    } catch (error) {
      return "Invalid date";
    }
  };
  