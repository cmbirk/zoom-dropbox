const { PubSub } = require('@google-cloud/pubsub')

const pubsub = new PubSub()

exports.http = async (req, res) => res.status(200).send('Hello World')

exports.getZoomVideos = async (event, context) => {
  console.log('Getting Zoom videos')


  const videos = [{ name: 'video1' }, { name: 'video2' }]

  try {
    const topic = pubsub.topic('get-zoom-video-success')

    await topic.publish(Buffer.from(JSON.stringify(videos), 'utf8'))

    console.log('Topic Published Successfully')
  } catch (err) {
    console.error(err)
    throw (err)
  }
};

exports.saveToDropbox = async (event, callback) => {
  console.log(event)
};
