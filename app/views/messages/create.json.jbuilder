json.text "テキスト"
json.created_at @message.created_at
json.content @message.content
json.image @message.image
json.(@message, :created_at, :updated_at)

binding.pry