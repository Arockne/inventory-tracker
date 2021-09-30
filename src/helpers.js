const capitalize = (name) => name.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')

const totalCost = ({ pricePerUnit, amount }) => (Math.round(((parseFloat(pricePerUnit) * parseFloat(amount))) * 100)) / 100

export { capitalize, totalCost }