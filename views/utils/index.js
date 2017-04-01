export const standardizeLocale = language => {
  if (['zh-CN', 'zh-TW', 'ja-JP', 'en-US'].includes(language)) return language
  switch (language) {
  case 'zh':
    return 'zh-CN'
  case 'ja':
    return 'ja-JP'
  default:
    return 'en-US'
  }
}
