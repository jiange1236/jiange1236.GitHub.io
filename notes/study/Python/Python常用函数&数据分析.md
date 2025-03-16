---
title: Python常用函数&数据分析
date: 2022-05-13
category:
  - 学习
tag:
  - 学习
  - Python
article: true
---

[toc]

## 内置函数

| **函数**                                                     | **说明**                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| abs(x)                                                       | 返回一个数的绝对值                                           |
| all(iterable)                                                | 如果 iterable 所有元素均为真值(或可迭代对象为空)则返回 True  |
| any(iterable)                                                | 如果 iterable 的任一元素为真值则返回 True                    |
| bool([x])                                                    | 返回一个布尔值，True 或者 False                              |
| callable(object)                                             | 如果参数 object 是可调用的就返回 True，否则返回 False        |
|                                                              |                                                              |
| ascii(object)                                                | 就像函数 repr()，返回一个对象可打印的字符串                  |
| bin(x)                                                       | 将一个整数转变为一个前缀为“0b”的二进制字符串                 |
| chr(i)                                                       | 返回 Unicode 码位为整数 i 的字符的字符串格式                 |
| complex([real[, imag]])                                      | 返回值为 real + imag*1j 的复数，或将字符串或数字转换为复数   |
| divmod(a, b)                                                 | 它将两个（非复数）数字作为实参，并在执行整数除法时返回一对商和余数 |
| float([x])                                                   | 返回从数字或字符串 x 生成的浮点数                            |
| hex(x)                                                       | 将整数转换为以“0x”为前缀的小写十六进制字符串                 |
| int(x, base=10)                                              | 返回一个基于数字或字符串 x 构造的整数对象，或者在未给出参数时返回 0 |
|                                                              |                                                              |
| breakpoint(*args, **kws)                                     | 此函数会在调用时将你陷入调试器中                             |
| bytearray([source[, encoding[, errors]]])                    | 返回一个新的 bytes 数组                                      |
| bytes([source[, encoding[, errors]]])                        | 返回一个新的“bytes”对象， 是一个不可变序列，包含范围为 0 <= x < 256 的整数 |
| compile(source, filename, mode, flags=0, dont_inherit=False, optimize=-1) | 将 source 编译成代码或 AST 对象                              |
| hash(object)                                                 | 返回该对象的哈希值（如果它有的话）                           |
| id(object)                                                   | 返回对象的“标识值”                                           |
|                                                              |                                                              |
|                                                              |                                                              |
|                                                              |                                                              |
| eval(expression[, globals[, locals]])                        | 实参是一个字符串，以及可选的 globals 和 locals。globals 实参必须是一个字典。locals 可以是任何映射对象。 |
| exec(object[, globals[, locals]])                            | 这个函数支持动态执行 Python 代码。object 必须是字符串或者代码对象。如果是字符串，那么该字符串将被解析为一系列 Python 语句并执行（除非发生语法错误）。 |
| help([object])                                               | 启动内置的帮助系统（此函数主要在交互式中使用）               |
|                                                              |                                                              |
|                                                              |                                                              |
|                                                              |                                                              |
| @classmethod                                                 | 把一个方法封装成类方法                                       |
|                                                              |                                                              |
| dir([object])                                                | 如果没有实参，则返回当前本地作用域中的名称列表               |
| globals()                                                    | 返回表示当前全局符号表的字典                                 |
|                                                              |                                                              |
| getattr(object, name[, default])                             | 返回对象命名属性的值                                         |
| delattr(object, name)                                        | setattr() 相关的函数，如果对象允许，该函数将删除指定的属性   |
| hasattr(object, name)                                        | 如果字符串是对象的属性之一的名称，则返回 True，否则返回 False |
|                                                              |                                                              |

### Enumerate(iterable, start=0) --返回一个枚举对象

```
seasons = ['Spring', 'Summer', 'Fall', 'Winter']
print(list(enumerate(seasons)))
#[(0, 'Spring'), (1, 'Summer'), (2, 'Fall'), (3, 'Winter')]
print(list(enumerate(seasons, start=1)))
#[(1, 'Spring'), (2, 'Summer'), (3, 'Fall'), (4, 'Winter')]
```

### Filter、Map、Reduce和Enumerate函数  --筛选、代换、单个计算、累计计算

**filter（fun，sequence）**

参数fun可以是一个自定义的函数名，也可以使用lambda函数。参数sequence是一个序列，可以是列表、元组或者字符串 。函数对序列每一元素做出条件判断，并把所有的True元素返回，返回对象是一个迭代器。即通过fun函数筛选sequence中的元素。

```
def is_odd(n):
    return n % 2 == 1
newlist = filter(is_odd, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
```

**map（fun，sequence）**

参数上map函数与filter是一样的，他们的差别就是函数是对每个元素做一个数学上的代换，而非条件的判断。这个函数返回的也是一个迭代器。即通过fun函数计算sequence中的单个元素。

```
def square(x) :            ## 计算平方数
    return x ** 2
map(lambda x, y: x + y, [1, 3, 5, 7, 9], [2, 4, 6, 8, 10])    
```

**reduce（fun，sequence）**

参数是与上面两个是一样的，他的功能是对一个序列进行压缩运算，得到一个值。但是reduce在python2的时候是内置函数，到了python3移到了functools模块，所以使用之前需要 from functools import reduce 。与上面的区别是，该函数返回一个值，而非迭代器，且fun函数必须传入两个参数。即通过fun函数累计计算sequence中的元素（如累加、累乘）。

```
from functools import reduce
def add(x, y) :            ## 两数相加
    return x + y
sum1 = reduce(add, [1,2,3,4,5])   ## 计算列表和：1+2+3+4+5
```

**enumerate（sequence）**

计数可迭代对象中的元素，然后返回包含每个计数（从 start 开始）和元素两个值的二元组，第一个值是索引，第二个值是元素。

```
for item in enumerate(['subject', 'verb', 'object']):
    print(item) ## (0, 'subject') (1, 'verb') (2, 'object')
```

### Format(value[, format_spec]) --格式化字符串

```
print(f'我叫 {name:s} 今年 {age:d} 岁!')
print('我叫 %s 今年 %d 岁!' % ('小明', 10))
print('我叫 {:s} 今年 {:d} 岁!'.format('小明', 10))
```

格式化参数：[[fill]align][sign][#][0][width][grouping_option][.precision][type]

[fill]	: 号后面带填充的字符，只能是一个字符，不指定则默认是用空格填充]

[align]	^, <, > 分别是居中、左对齐、右对齐，后面带宽度

[sign]	+ 表示在正数前显示 +，负数前显示 -  （空格）表示在正数前加空格

\#	在八进制数前面显示零('0')，在十六进制前面显示'0x'或者'0X'(取决于用的是'x'还是'X')

0	显示的数字前面填充'0'而不是默认的空格

[width]	定义最小总字段宽度的十进制整数，包括任何前缀、分隔符和其他格式化字符

[.precision]	小数点后的位数

[type]	b、d、o、x 、X分别是二进制、十进制、八进制、十六进制小写、十六进制大写

  c 字符

**常用格式化方法**

| 3.1415926  | `{:.2f}`  | 3.14       | 保留小数点后两位             |
| ---------- | --------- | ---------- | ---------------------------- |
| 3.1415926  | `{:+.2f}` | +3.14      | 带符号保留小数点后两位       |
| -1         | `{:+.2f}` | -1.00      | 带符号保留小数点后两位       |
| 2.71828    | `{:.0f}`  | 3          | 不带小数                     |
| 5          | `{:0>2d}` | 05         | 数字补零 (填充左边, 宽度为2) |
| 5          | `{:x<4d}` | 5xxx       | 数字补x (填充右边, 宽度为4)  |
| 10         | `{:x<4d}` | 10xx       | 数字补x (填充右边, 宽度为4)  |
| 1000000    | `{:,}`    | 1,000,000  | 以逗号分隔的数字格式         |
| 0.25       | `{:.2%}`  | 25.00%     | 百分比格式                   |
| 1000000000 | `{:.2e}`  | 1.00e+09   | 指数记法                     |
| 13         | `{:>10d}` | ........13 | 右对齐 (默认, 宽度为10)      |
| 13         | `{:<10d}` | 13........ | 左对齐 (宽度为10)            |
| 13         | `{:^10d}` | ....13.... | 中间对齐 (宽度为10)          |
| 11         | `{:b}`    | 1011       | 二进制                       |
| 11         | `{:d}`    | 11         | 十进制                       |
| 11         | `{:o}`    | 13         | 八进制                       |
| 11         | `{:x}`    | b          | 十六进制                     |
| 11         | `{:#x}`   | 0xb        | 十六进制小写                 |
| 11         | `{:#X}`   | 0XB        | 十六进制大写                 |

## 常用函数

### Collections --容器数据类型

collections模块提供了诸多非常好用的数据结构，主要包括：

namedtuple：命令元组，它是一个类工厂，接受类型的名称和属性列表来创建一个类。

deque：双端队列，是列表的替代实现。Python中的列表底层是基于数组来实现的，而deque底层是双向链表，因此当你需要在头尾添加和删除元素是，deque会表现出更好的性能，渐近时间复杂度为$O(1)$。

Counter：dict的子类，键是元素，值是元素的计数，它的most_common()方法可以帮助我们获取出现频率最高的元素。Counter和dict的继承关系我认为是值得商榷的，按照CARP原则，Counter跟dict的关系应该设计为关联关系更为合理。

OrderedDict：dict的子类，它记录了键值对插入的顺序，看起来既有字典行为，也有链表行为。

defaultdict：类似于字典类型，但是可以通过默认的工厂函数来获得键对应的默认值，相比字典中的setdefault()方法，这种做法更加高效。

```
"""找出序列中出现次数最多的元素"""
from collections import Counter
words = ['look', 'into', 'my', 'eyes', 'look', 'into', 'my', 'eyes']
counter = Counter(words)
print(counter.most_common(3))
```

### Decimal、Fractions --十进制定点和浮点运算、分数运算



### Hashlib --哈希函数模块

```
import hashlib
hasher = hashlib.md5()
with open('Python-3.7.1.tar.xz', 'rb') as file:
    data = file.read(512)
    while data:
        hasher.update(data)
        data = file.read(512)
print(hasher.hexdigest())
```

### Heapq --堆排序模块

```
import heapq
list2 = [{'name': 'ACME', 'shares': 75, 'price': 115.65}]
print(heapq.nsmallest(3, list1))    ## 找出最小的三个值
print(heapq.nlargest(3, list2, key=lambda x: x['price']))## 找出价格最高的三只股票
```

### Lambda函数 --表达式

定义Lambda函数的关键字是lambda，后面跟函数的参数，如果有多个参数用逗号进行分隔；冒号后面的部分就是函数的执行体，通常是一个表达式，表达式的运算结果就是Lambda函数的返回值，不需要写return 关键字

```
numbers1 = [35, 12, 8, 99, 60, 52]
numbers2 = list(map(lambda x: x ** 2, filter(lambda x: x % 2 == 0, numbers1)))
def c1(*args, in_v=0, op=lambda x, y: x + y, **kwargs):  ## Lambda函数作为默认参数
```

```
import operator, functools
## 一行代码定义求阶乘的函数
fac = lambda num: functools.reduce(operator.mul, range(1, num + 1), 1)
## 一行代码定义判断素数的函数
is_p = lambda x: x > 1 and all(map(lambda f: x % f, range(2, int(x ** 0.5) + 1)))
#bool and a 即当bool为TRUE时取a，否则为FALSE
```

```
 def make_incrementor(n):
     return lambda x: x + n
f = make_incrementor(42)
f(0) ## 42
```

### Itertools函数 --迭代

**itertools 模块包含很多常用的迭代器以及用来组合迭代器的函数**

```
import itertools
s = itertools.count(10, 5)
print(next(s))
## 产生ABCD的全排列
for value in itertools.permutations('ABCD'):
## 产生ABCDE的五选三组合
for value in itertools.combinations('ABCDE', 3):
## 产生ABCD和123的笛卡尔积
for value in itertools.product('ABCD', '123'):
## 产生ABC的无限循环序列
for value in itertools.cycle(('A', 'B', 'C')):     
```

| **函数**                                        | **运算**                                                     | **语法**                                       |
| ----------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------- |
| itertools.count(a, b)                           | 返回一个等分的无限数据流，初始值默认为0，间隔默认为1，你也选择可以指定初始值和间隔 | a, a+b, a+2b, a+3b...                          |
| itertools.cycle([a, b, c])                      | 保存一份所提供的可迭代对象的副本，并返回一个能产生整个可迭代对象序列的新迭代器 | a, b, c, a, b, c, a, b, c...                   |
| itertools.repeat(elem, [n])                     | 返回 n 次所提供的元素，当 n 不存在时，返回无数次所提供的元素 | elem, elem, elem, elem...n次                   |
| itertools.chain(['a','b', 'c'], (1, 2, 3), ...) | 接受任意数量的可迭代对象作为输入，首先返回第一个迭代器的所有元素，然后是第二个的所有元素，如此一直进行下去，直到消耗掉所有输入的可迭代对象 | a, b, c, 1, 2, 3...                            |
| itertools.islice(iter, [start], stop, [step])   | 返回一个所输入的迭代器切片的数据流。如果只单独给定 stop 参数的话，它会返回从起始算起 stop 个数量的元素。如果你提供了起始下标 start，你会得到 stop-start 个元素；如果你给定了 step 参数，数据流会跳过相应的元素 | iter[start], iter[start+step], ..., iter[stop] |
| itertools.tee(iter, [n])                        | 可以复制一个迭代器；它返回 n 个能够返回源迭代器内容的独立迭代器。如果你不提供参数 n，默认值为 2 |                                                |
| itertools.starmap(func, iter)                   | 假定可迭代对象能够返回一个元组的流，并且利用这些元组作为参数来调用 func | func(iter[0]), func(iter[1]), func(iter[2])... |
| itertools.filterfalse(predicate, iter)          | 和 filter() 相反，返回所有让 predicate 返回 false 的元素     |                                                |

### Operator函数 --表达式

**对于常见的操作符，例如乘法操作符，使用 operator 模块中的函数以代替lambda函数. 例如, 推荐使用 operator.mul , 而不是 lambda x, y: x \* y .**

```
import operator
a = [1, 2, 3]
b = 2
print(operator.mul(a, b))    
```

| **函数**                                        | **运算**                                                     | **语法**                                                     |
| ----------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| operator.add(a, b)                              | 加法                                                         | a + b                                                        |
| operator.concat(a, b)                           | 字符串拼接                                                   | 'a + b'                                                      |
| operator.contains(a, b)                         | 包含                                                         | b in a?                                                      |
| operator.sub(a, b)                              | 减法                                                         | a - b                                                        |
| operator.mul(a, b)                              | 乘法                                                         | a * b                                                        |
| operator.matmul(a, b)                           | 矩阵乘法                                                     | a @ b                                                        |
| operator.truediv(a, b)                          | 除法                                                         | a / b                                                        |
| operator.floordiv(a, b)                         | 除法                                                         | a // b                                                       |
| operator.neg(a)                                 | 取反（算术）                                                 | - a                                                          |
| operator.not_(a)                                | 取反（逻辑）                                                 | not a                                                        |
| operator.pos(a)                                 | 正数                                                         | + a                                                          |
| operator.and_(a, b)                             | 按位与                                                       | a & b                                                        |
| operator.xor(a, b)                              | 按位异或                                                     | a ^ b                                                        |
| operator.inv(a)                                 | 按位取反                                                     | ~ a                                                          |
| operator.or_(a, b)                              | 按位或                                                       | a \| b                                                       |
| operator.pow(a, b)                              | 取幂                                                         | a ** b                                                       |
| operator.mod(a, b)                              | 取模                                                         | a % b                                                        |
| operator.abs(a)                                 | 取绝对值                                                     | \| a \|                                                      |
| operator.index(a)                               | 取整                                                         |                                                              |
| operator.is_(a, b)                              | 返回 a is b                                                  | a is b?                                                      |
| operator.is_not(a, b)                           | 返回 a is not b                                              | a is not b?                                                  |
| operator.truth(a)                               | 如果 a 为真值则返回 True                                     | truth a?                                                     |
| operator.countOf(a, b)                          | 返回出现次数                                                 |                                                              |
| operator.indexOf(a, b)                          | 返回首次出现所在的索引号                                     |                                                              |
| operator.length_hint(obj, default=0)            | 返回obj的估计长度                                            |                                                              |
| operator.setitem(a, b, c)                       | 索引赋值                                                     | a[b] = c                                                     |
| operator.delitem(a, b)                          | 索引删除                                                     | del a[b]                                                     |
| operator.getitem(a, b)                          | 索引取值                                                     | a[b]                                                         |
| operator.setitem(a, slice(i, j), c)             | 切片赋值                                                     | a[i:j] = c                                                   |
| operator.delitem(a, slice(i, j))                | 切片删除                                                     | del a[i:j]                                                   |
| operator.getitem(a, slice(i, j))                | 切片取值                                                     | a[i:j]                                                       |
| operator.lshift(a, b)                           | 左移                                                         | a << b                                                       |
| operator.rshift(a, b)                           | 右移                                                         | a >> b                                                       |
| operator.lt(a, b)                               | 小于                                                         | a < b                                                        |
| operator.le(a, b)                               | 小于等于                                                     | a ≤ b                                                        |
| operator.eq(a, b)                               | 等于                                                         | a == b                                                       |
| operator.ne(a, b)                               | 不等于                                                       | a != b                                                       |
| operator.ge(a, b)                               | 大于等于                                                     | a ≥ b                                                        |
| operator.gt(a, b)                               | 大于                                                         | a > b                                                        |
| operator.attrgetter(*attrs)                     | 返回一个可从操作数中获取 attr 的可调用对象。 如果请求了一个以上的属性，则返回一个属性元组。 属性名称还可包含点号 | 在 f = attrgetter('name.first', 'name.last') 之后，调用 f(b) 将返回 (b.name.first, b.name.last) |
| operator.itemgetter(*items)                     | 返回一个使用操作数的 __getitem__() 方法从操作数中获取 item 的可调用对象。 如果指定了多个条目，则返回一个查找值的元组 | 在 g = itemgetter(2, 5, 3) 之后，调用 g(r) 将返回 (r[2], r[5], r[3]) |
| operator.methodcaller(name, /, *args, **kwargs) | 返回一个在操作数上调用 name 方法的可调用对象。 如果给出额外的参数和/或关键字参数，它们也将被传给该方法 | 在 f = methodcaller('name', 'foo', bar=1) 之后，调用 f(b) 将返回 b.name('foo', bar=1) |
| operator.iadd(a, b)                             | 迭加                                                         | a += b                                                       |
| operator.iconcat(a, b)                          | 迭加，a 和 b 为序列                                          | a += b                                                       |
| operator.isub(a, b)                             | 迭减                                                         | a -= b                                                       |
| operator.imul(a, b)                             | 迭乘                                                         | a *= b                                                       |
| operator.imatmul(a, b)                          | 迭代矩阵乘法                                                 | a @= b                                                       |
| operator.itruediv(a, b)                         | 迭除                                                         | a /= b                                                       |
| perator.ifloordiv(a, b)                         | 迭除                                                         | a //= b                                                      |
| operator.iand(a, b)                             | 迭代按位与                                                   | a &= b                                                       |
| operator.ixor(a, b)                             | 迭代按位异或                                                 | a ^= b                                                       |
| operator.ior(a, b)                              | 迭代按位或                                                   | a \|= b                                                      |
| operator.ipow(a, b)                             | 迭代取幂                                                     | a **= b                                                      |
| operator.imod(a, b)                             | 迭代取模                                                     | a %= b                                                       |
| operator.ilshift(a, b)                          | 迭代左移                                                     | a <<= b                                                      |
| operator.irshift(a, b)                          | 迭代右移                                                     | a >>= b                                                      |

### Random - 随机数和随机抽样模块

getrandbits(k)：返回具有k个随机比特位的整数。

randrange(start, stop[, step])：从range(start, stop, step) 返回一个随机选择的元素，但实际上并没有构建一个range对象。

randint(a, b)：返回随机整数N满足a <= N <= b，相当于randrange(a, b+1)。

choice(seq)：从非空序列seq返回一个随机元素。 如果seq为空，则引发IndexError。

choices(population, weight=None, *, cum_weights=None, k=1)：从population中选择替换，返回大小为k的元素列表。 如果population为空，则引发IndexError。

shuffle(x[, random])：将序列x随机打乱位置。

sample(population, k)：返回从总体序列或集合中选择k个不重复元素构造的列表，用于无重复的随机抽样。

random()：返回[0.0, 1.0)范围内的下一个随机浮点数。

expovariate(lambd)：指数分布。

gammavariate(alpha, beta)：伽玛分布。

gauss(mu, sigma) / normalvariate(mu, sigma)：正态分布。

paretovariate(alpha)：帕累托分布。

weibullvariate(alpha, beta)：威布尔分布。

### Sorted函数 --排序

**升序**

升序排序非常简单：只需调用 sorted() 函数即可。它会返回一个新的已排序列表。

```
print(sorted([5, 2, 3, 1, 4]))
```

```
from operator import itemgetter, attrgetter
student_tuples = [
    ('john', 'A', 15),
    ('jane', 'B', 12),
    ('dave', 'B', 10),]
#print(sorted(student_tuples, key=lambda student: student[2]))
print(sorted(student_tuples, key=itemgetter(1,2))） ## 按等级排序，再按年龄排序
```

```
from operator import itemgetter, attrgetter
class Student:
    def __init__(self, name, grade, age):
        self.name = name
        self.grade = grade
        self.age = age
    def __repr__(self):
        return repr((self.name, self.grade, self.age))    
students = [
    Student('john', 'A', 15),
    Student('jane', 'B', 12),
    Student('dave', 'B', 10),]
#print(sorted(student_objects, key=lambda student: Student.age))
print(sorted(students, key=attrgetter('grade','age'))) ## 按等级排序，再按年龄排序        
```

**降序**

```
sorted(student_tuples, key=itemgetter(2), reverse=True)
sorted(student_objects, key=attrgetter('age'), reverse=True)
```

**多重排序**

```
def multisort(xs, specs): ## student_objects沿用升序中对象
    for key, reverse in reversed(specs):
        xs.sort(key=attrgetter(key), reverse=reverse)
    return xs
print(multisort(student_objects, (('grade', True), ('age', False))))                 
```

### Zip函数 --按序合并成组，返回列表

zip(iterA, iterB, ...) 从每个可迭代对象中选取单个元素组成列表并返回:

```
zip(['a', 'b', 'c'], (1, 2, 3)) ## ('a', 1), ('b', 2), ('c', 3)     
```

## 数据分析

**三大神器**

[NumPy](https://numpy.org)：支持常见的数组和矩阵操作，通过ndarray类实现了对多维数组的封装，提供了操作这些数组的方法和函数集。由于NumPy内置了并行运算功能，当使用多核CPU时，Numpy会自动做并行计算。

[Pandas](https://pandas.pydata.org)：pandas的核心是其特有的数据结构DataFrame和Series，这使得pandas可以处理包含不同类型的数据的负责表格和时间序列，这一点是NumPy的ndarray做不到的。使用pandas，可以轻松顺利的加载各种形式的数据，然后对数据进行切片、切块、处理缺失值、聚合、重塑和可视化等操作。

[Matplotlib](https://matplotlib.org)：matplotlib是一个包含各种绘图模块的库，能够根据我们提供的数据创建高质量的图形。此外，matplotlib还提供了pylab模块，这个模块包含了很多像MATLAB一样的绘图组件。

**其他相关库**

[SciPy](https://scipy.org/)：完善了NumPy的功能，封装了大量科学计算的算法，包括线性代数、稀疏矩阵、信号和图像处理、最优化问题、快速傅里叶变换等。

[Seaborn](https://seaborn.pydata.org/)：Seaborn是基于matplotlib的图形可视化工具，直接使用matplotlib虽然可以定制出漂亮的统计图表，但是总体来说还不够简单方便，Seaborn相当于是对matplotlib做了封装，让用户能够以更简洁有效的方式做出各种有吸引力的统计图表。

[Scikit-learn](https://scikit-learn.org/)：Scikit-learn最初是SciPy的一部分，它是Python数据科学运算的核心，提供了大量机器学习可能用到的工具，包括：数据预处理、监督学习（分类、回归）、无监督学习（聚类）、模式选择、交叉检验等。

[Statsmodels](https://www.statsmodels.org/stable/index.html)：包含了经典统计学和经济计量学算法的库。

### NumPy

**运算**

元素个数 s.size	形状 s.shape		数据类型 s.dtype	维度 s.dim

索引 s[i]	s[i][j]		切片 s[i:j:k]

单个元素占用内存空间的字节数 s.itemsize

所有元素占用内存空间的字节数 s.nbytes

**一维数组**

```
array1 = np.array([1, 2, 3, 4, 5])    ## 指定列表
array2 = np.arange(0, 20, 2)    ## 指定取值范围
array3 = np.linspace(-5, 5, 101)    #指定范围均匀间隔的数字，起点，终点，数量
array4 = np.random.randint(1, 101, 10)    ## 生成随机数
array5 = np.random.normal(50, 10, 20)    ## 正态分布随机数       
```

**二维数组**

```
array6 = np.array([[1, 2, 3], [4, 5, 6]])    ## 指定列表
array7 = np.zeros((3, 4))    ## 3行4列，用0初始化
array8 = np.ones((3, 4))    ## 3行4列，用1初始化
array9 = np.full((3, 4), 10)    ## 3行4列，用10初始化
array10 = np.eye(4)    ## 创建单位矩阵
array11 = np.array([1, 2, 3, 4, 5, 6]).reshape(2, 3)    ## 将一维数组变成二维数组
array12 = np.random.rand(3, 4)    ## 生成随机数
array13 = np.random.randint(1, 100, (3, 4))    ## 随机整数构成的3行4列的二维数组
```

**多维数组**

```
array14 = np.random.randint(1, 100, (3, 4, 5)) ## 随机整数构成的2个4行5列的多维数组
array15 = np.arange(1, 25).reshape((2, 3, 4))  ## 将一维的数组调形为多维数组
array16 = np.random.randint(1, 100, (4, 6)).reshape((4, 3, 2))  ## 将二维的数组调形为多维数组
array18 = plt.imread('guido.jpg')    #图片转换为三维数组
```

**统计方法**

ndarray对象的统计方法主要包括：sum、mean、std、var、min、max、argmin、argmax、cumsum等，分别用于对数组中的元素求和、求平均、求标准差、求方差、找最大、找最小、求累积和等

### Pandas

**语法**