from fileinput import filename
import requests

cid = input("Enter cid/oid of the video: ")

fileName = cid+".xml"
inFileName = input("Enter the file name u want or just leave it blank: ")

if inFileName != "":
    fileName = inFileName + ".xml"

url = 'https://api.bilibili.com/x/v1/dm/list.so?oid='+cid
params = {
    'type':1,           #弹幕类型
    'oid':144541892,    #cid
    'date':'2020-01-21' #弹幕日期
}
cookies = {
    'SESSDATA':'xxx'
}
resp = requests.get(url)
data = resp.content


if open(fileName, "x"):
    outFile = open(fileName, "wb")
    outFile.write(data)
    outFile.close()
else:
    print('fail to create the file')