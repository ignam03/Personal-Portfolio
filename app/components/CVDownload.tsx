import { FiDownload, FiFileText } from 'react-icons/fi';

interface CVDownloadProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  showIcon?: boolean;
  className?: string;
}

export default function CVDownload({
  variant = 'secondary',
  size = 'md',
  label = 'Descargar CV',
  showIcon = true,
  className = '',
}: CVDownloadProps) {
  const sizeClasses = {
    sm: '!text-xs !py-2 !px-4',
    md: '',
    lg: '!text-base !py-4 !px-6',
  };

  const baseClasses =
    variant === 'primary' ? 'btn-primary group' : 'btn-secondary group';

  return (
    <a
      href="/cv/carlos-madrigal-cv.pdf"
      download
      className={`${baseClasses} ${sizeClasses[size]} ${className}`}
      aria-label={`Descargar ${label}`}
    >
      {showIcon && (
        variant === 'primary' ? (
          <FiDownload size={size === 'lg' ? 18 : 16} />
        ) : (
          <FiFileText size={size === 'lg' ? 18 : 16} />
        )
      )}
      <span>{label}</span>
      <span className="transition-transform group-hover:translate-y-0.5">↓</span>
    </a>
  );
}