#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
convert.py


"""
import sys
import codecs
sys.stdout = codecs.getwriter('utf-8')(sys.stdout)
import re, json

def read_rule_file(inputfile):
  content = open(inputfile, 'U').read().decode('utf-8')
  if inputfile.endswith('.txt'):
    rules = parse_text_rules(content)
  elif inputfile.endswith('.json') or inputfile.endswith('.js'):
    rules = json.loads(content)
  else: 
    print 'Unrecognized rule file.'
  return rules

def parse_text_rules(text):
  lines = text.strip().splitlines()
  return [line.split() for line in lines]

def convert(content, rules):
  for pair in rules:
    before, after = pair[0], pair[1]
    content = content.replace( before, after )
  return content

if __name__ == "__main__":
  import fileinput
  args = sys.argv
  DEFAULT_RULE_FILE = '../js/subfile.json'
  if len(args) == 3:  
    rule_file =  sys.argv[1]
    rules = read_rule_file(rule_file)
    inputfile =  sys.argv[2]
    content = open(inputfile, 'U').read().decode('utf-8')
  if len(args) == 2:  
    rule_file =  sys.argv[1]
    rules = read_rule_file(rule_file)
    content = sys.stdin.read().decode('utf-8')
  if len(args) == 1:  
    content = ''.join([line for line in fileinput.input()]).decode('utf-8')
    rules = read_rule_file(DEFAULT_RULE_FILE)
  if len(args) < 1:
    print 'subby.py <rule_file> <input_text>'
     
    
  print convert(content, rules)


