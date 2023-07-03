dir=manifests
for entry in "$dir"/*
do
  yes n | npx sqd deploy . -m "$entry" --no-stream-logs
  echo "$entry deployed"
done