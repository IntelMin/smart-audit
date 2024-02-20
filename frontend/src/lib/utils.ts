export const formatAddress = (address: string) => {
    return `${address.substring(0, 9)}...${address.substring(address.length - 5)}`
}