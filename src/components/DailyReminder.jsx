import { useEffect } from "react";

const DailyReminder = () => {
  useEffect(() => {
    const today = new Date().toLocaleDateString();
    const lastShown = localStorage.getItem("reminderDate");

    if (lastShown !== today) {
      alert("😊 Don't forget to log your mood today!");
      localStorage.setItem("reminderDate", today);
    }
  }, []);

  return null;
};

export default DailyReminder;