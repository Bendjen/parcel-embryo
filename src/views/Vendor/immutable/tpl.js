const transform = `    Immutable.fromJS([1,2])     // immutable的 list   
    Immutable.fromJS({a: 1})    // immutable的 map`

const transform2 = `    immutableData.toJS()`

const compare =`    Immutable.is(immutableA, immutableB)`

const merge = `    immutableMapC = immutableMapA.merge(immutableMapB)
`

const find = `    immutableData.get('a') // {a:1} 得到1。
    immutableData.getIn(['a', 'b']) // {a:{b:2}} 得到2。访问深层次的key
`

const add =`    immutableData.set('a', 2) 
    immutableData.setIn(['a', 'b'], 3)  // 深层次的key
`

const update = `    immutableData.update('a',function(x){return x+1})
    immutableData.updateIn(['a', 'b'],function(x){return x+1})  // 深层次的key
`

const delet =`    immutableData.delete('a')
    immutableData.deleteIn(['a', 'b'])  // 深层次的key
`
const list = `    // 与Map一致，key变为数字索引。
    immutableList.set(1, 2)`

export {transform,transform2,compare,merge,find,add,update,delet,list}