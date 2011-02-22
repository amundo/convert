#!/usr/bin/env python
# -*- coding: utf-8 -*-
import sys
import codecs
sys.stdout = codecs.getwriter('utf-8')(sys.stdout)
import re, json


subs = json.load(open('/Users/pathall/Sites/convert/subfile.json', 'U'))

def convert(content):
  for pair in subs:
    before, after = pair[0], pair[1]
    content = content.replace( before, after )
  return content

if __name__ == "__main__":
  from fileinput import input
  content = []
  for line in input():
    content.append( line.decode('utf-8') )
  
  content = ''.join(content)
  
  
  print convert(content)


