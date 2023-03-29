import numpy as np

diseases = ['Abutilon mosaic', 'Anthocyanosis', 'Blue disease', 'Leaf crumble', 'Psylosis']

print(diseases[np.random.randint(0,len(diseases))], end='')