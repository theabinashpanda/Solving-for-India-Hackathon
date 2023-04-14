# print('getting the imports...')
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
import sys
from PIL import Image
import numpy as np
import tensorflow as tf
# print('imports received')

PATH = sys.argv[1]
IMG_SIZE = 160
CLASS_NAMES = ['Diseased', 'Fresh']

# print('loading the image...')
image = np.asarray(Image.open(PATH)).astype(np.float32)
image = image/127.5 - 1
image = tf.image.resize(image, (IMG_SIZE, IMG_SIZE))
# print('image loaded')

# print('loading the model...')
model = tf.keras.models.load_model('/home/light/Projects/Solving-for-India-Hackathon/ai-model/cotton.h5')
# print('model loaded')

res = model.predict(np.array([image]), verbose=0)[0][0] * 2
print(CLASS_NAMES[int(np.floor(res))])