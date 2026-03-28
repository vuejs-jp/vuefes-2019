import dayjs from 'dayjs'

export function formatTime(dateTime: string): string {
  return dayjs(dateTime).format('HH:mm')
}
