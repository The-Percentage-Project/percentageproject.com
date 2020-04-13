import os
print("var photos = [")
[print("{src: require(\"./" + i + "\"), width: 4},") for i in os.listdir()]
print("]")

print("export default photos")