export const fetchLang = async (file) => {
  try {
    const modulePath = `../lang/${file}.json`;
    const module = await import(modulePath);
    return module.default;
  } catch (error) {
    console.error("Error loading language file:", error);
  }
};
