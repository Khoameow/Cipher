def caesar_cipher(message, mode, key):
    
    LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    message = message.upper()
    translated = ''
    
    for symbol in message:
        if symbol in LETTERS:
            num = LETTERS.find(symbol)
            if mode.upper() == 'ENCRYPT':
                num = (num - key) % 26
            elif mode.upper() == 'DECRYPT':
                num = (num + key) % 26
            translated = translated + LETTERS[num]
        else:
            translated = translated + symbol

    return translated

message = 'YSMBYZWMIYREQ '
cipher = caesar_cipher(message, 'ENCRYPT', 3)
print('Plain text:  ' + message)
print('Cipher text: ' + cipher)
def caesar_crack(cipher):
    for key in range(0, 26):
        message = caesar_cipher(cipher, 'DECRYPT', key)
        print('key = {0:<4}   {1}'.format(str(key), message))
        

cipher = 'YSMBYZWMIYREQ '
print('nnCipher text:', cipher)
print('Available Message: n')
caesar_crack(cipher)