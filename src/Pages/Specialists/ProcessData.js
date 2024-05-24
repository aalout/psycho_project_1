export default function processData(data) {
    return data.map(item => ({
      ...item,
      description: item.description.trim().replace(/\n/g, '<br>')
    }));
  }