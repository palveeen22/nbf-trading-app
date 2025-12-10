export function sendMail(email: string, subject?: string, body?: string): string {
  let mailto = `mailto:${email}`;
  const params: string[] = [];
  
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  
  if (params.length > 0) {
    mailto += `?${params.join('&')}`;
  }
  
  return mailto;
}