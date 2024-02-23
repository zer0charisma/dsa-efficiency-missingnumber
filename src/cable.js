
function cable1(currentLength, requireLength, saleLength) {
  let count = 0;
  for (let i = currentLength; i < requireLength; i += saleLength)
    count += 1;

return count;

}

function cable2 (currentLength, requireLength, saleLength) {
  const distance = requireLength - currentLength;
  const total = Math.ceil(distance / saleLength);
  return total;
}

module.exports= {cable1, cable2};