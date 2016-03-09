import json
import sys

SUBFILE =  '/Users/pat/Sites/Unicode/convert/js/subfile.json'
data = json.load(open(SUBFILE))

if len(sys.argv) != 3: 
  print 'Usage: python ualias.py  <alias> <codepoint>'
  exit()

alias, code = sys.argv[1], sys.argv[2]

uchar = unichr(int(code, 16))

data.append( [ 
  '{' + alias + '}',
  uchar
]) 
  

open(SUBFILE, 'w').write(json.dumps(data, indent=2))
