
export function pathResolve(path: string): string {
  if (path.includes('/docs/license')) {
    return '/docs/pdf/Gravity_MIT_License-1.pdf'
  } else if (path.includes('/docs/privacy-policy')) {
    return '/docs/pdf/Gravity_Privacy_Policy_15.07.2020.pdf'
  } else if (path.includes('/docs/terms-of-use')) {
    return '/docs/pdf/Gravity_Terms_of_Use_15.07.2020.pdf'
  }

  return '/nodes'
}
