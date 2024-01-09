//Importing libraries for building tensor model
import tf from '@tensorflow/tfjs';
import tfvis from '@tensorflow/tfjs-vis';

const url_data = 'goPhish_url_data.csv'

const urlIndex = tf.feature_column.categorical();
const isMaliciousIndex = tf.feature_column.numerical();

const features = tf.data(url_data).map(row => {
    const url = row.url;
    const isMalicious = row.isMalicious;

    const featuresMap = { urlIndex: url};
    if (isMalicious !== undefined){
        featuresMap[isMaliciousIndex] = isMalicious;
    }
    return featuresMap
})
.batch(10);