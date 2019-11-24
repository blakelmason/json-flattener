$(document).ready(() => {
  $('#submit').click(e => {
    $('#message').text('Parsing')
    e.preventDefault()
    const file = $('#file').prop('files')[0]
    const reader = new FileReader()
    reader.readAsText(file)
    reader.onload = () => sendJSON(reader.result)

    function sendJSON(data) {
      $.ajax({
        method: 'post',
        url: '/csv',
        data: { json: data },
        success: () => {
          $('#message').text('CSV Ready')
        }
      })
    }
  })

  $('#download').click(e => {
    e.preventDefault()
    window.location.href = '/csv'
  })

  $('#downloadJSON').click(e => {
    e.preventDefault()
    window.location.href = '/json'
  })
})
