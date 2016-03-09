describe('GlossingView', function(){
  beforeEach(function(){

    this.rules = [
      ['1', 'ɨ']
    ]

    this.chatinoRules = [
    ]

    this.curlyRules = [
      ['{barredi}', 'ɨ']
    ]
  })

  afterEach(function(){

  })

  describe('Convert', function(){

    it('a to a', function(){
      expect(convert('a', this.rules)).toBe('a')
    })

    it('1 to barredi', function(){
      expect(convert('1', this.rules)).toBe('ɨ')
    })

    it('empty to empty', function(){
      expect(convert('', this.rules)).toBe('')
    })

    it('{barredi} to barredi', function(){
      expect(convert('{barredi}', this.curlyRules)).toBe('ɨ')
    })

  })

  describe('Load rules', function(){
    beforeEach(function(){
      this.curlyRules = [];
      fetch('../../js/subfile.json')
        .then(function(response){
           return response.json()
        })
        .then(function(json){
           this.curlyRules = json;
        })
    })

    it('loads curly rules', function(){
       expect(this.curlyRules.length).toBe(191)
    })
  })


})
