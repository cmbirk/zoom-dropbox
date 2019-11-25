const { PubSub } = require('@google-cloud/pubsub')

const pubsub = new PubSub()

exports.http = async (req, res) => res.status(200).send('Hello World')

exports.getZoomVideos = async (event, context) => {
  console.log('Getting Zoom videos')

  console.log(event, context)


  const videos = event.body

  try {
    const topic = pubsub.topic('get-zoom-videos-success')

    await topic.publish(Buffer.from(JSON.stringify(videos), 'utf8'))

    console.log('Topic Published Successfully')
  } catch (err) {
    console.error(err)
    throw (err)
  }
};

exports.saveToDropbox = async (event, context) => {
  console.log(event, context)

  return true
};
