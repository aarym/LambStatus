import { SettingsProxy } from 'api/utils'

export async function handle (event, context, callback) {
  try {
    const settings = new SettingsProxy()
    const serviceName = await settings.getServiceName()
    const statusPageURL = await settings.getStatusPageURL()
    callback(null, {serviceName, statusPageURL})
  } catch (error) {
    console.log(error.message)
    console.log(error.stack)
    callback('Error: failed to get status page settings')
  }
}
