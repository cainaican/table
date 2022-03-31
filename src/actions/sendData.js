
export const sendData = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    body: data,
  })
  if (!response.ok) {
    throw new Error(`Ошибка по адресу ${url}, данные: ${data} не отправлены`)
  } else {
    alert('Данные успешно отправлены')
    console.log(`Данные: ${data} отправлены по адресу ${url}`)
  }
  return await response.json()
}