import { useState, useEffect } from "react";

interface Settings {
  language: string;
  notifications: boolean;
}

export function useSettingsStorage(
  key: string,
  initialValue: Settings
) {
  const [settings, setSettings] = useState<Settings>(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(settings));
  }, [key, settings]);

  return [settings, setSettings] as const;
}