import sys
from decimal import *

d = {
    "int": 0,
    "float": 0.0,
    "dict": dict(),
    "set": set(),
    "tuple": tuple(),
    "list": list(),
    "str": "a",
    "unicode": u"a",
    "decimal": Decimal(0),
    "object": object(),
}

for k, v in sorted(d.items()):
    print("{: >10} {: >10} bytes".format(k, sys.getsizeof(v)))

