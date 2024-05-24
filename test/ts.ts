const i = true

if(true === i) console.log(1)
else { console.log(2) }

const a = [{ 1: 0.2 }, [3 + 3, 4 + 4, 5]]

const _b = { a: 2, d: 5, p: 4, o: 3, t: 6 }

function h(){
  console.log('hello')
}

function zz(x: Function){
  x()
  console.log('zz')
}

zz((d: any) => d)

zz(function ggg(d: number){
  return d
})
