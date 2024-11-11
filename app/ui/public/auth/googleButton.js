
export default function GoogleButton({ styles, clickAction }) {
  return (
    <button className={styles} onClick={() => clickAction()} >
      <svg width="225px" height="51px" viewBox="0 0 223 51" version="1.1" >
      <defs>
      <clipPath id="clip1">
        <path d="M 28 23 L 40.777344 23 L 40.777344 36 L 28 36 Z M 28 23 "/>
      </clipPath>
      <clipPath id="clip2">
        <path d="M 16 27 L 37 27 L 37 38.25 L 16 38.25 Z M 16 27 "/>
      </clipPath>
      <clipPath id="clip3">
        <path d="M 15.292969 19 L 21 19 L 21 32 L 15.292969 32 Z M 15.292969 19 "/>
      </clipPath>
      <clipPath id="clip4">
        <path d="M 16 12.75 L 37 12.75 L 37 24 L 16 24 Z M 16 12.75 "/>
      </clipPath>
      </defs>
      <g id="surface1">
      <path style={{stroke: "none", fillRule: "nonzero", fill:"rgb(94.901961%,94.901961%,94.901961%)", fillOpacity: "1"}} d="M 25.484375 0 L 197.515625 0 C 211.589844 0 223 11.417969 223 25.5 C 223 39.582031 211.589844 51 197.515625 51 L 25.484375 51 C 11.410156 51 0 39.582031 0 25.5 C 0 11.417969 11.410156 0 25.484375 0 Z M 25.484375 0 "/>
      <g clipPath="url(#clip1)" clipRule="nonzero">
      <path style={{stroke: "none", fillRule: "nonzero", fill:"rgb(25.882354%,52.156866%,95.686275%)", fillOpacity: "1"}} d="M 40.265625 25.789062 C 40.265625 24.886719 40.1875 24.015625 40.035156 23.183594 L 28.035156 23.183594 L 28.035156 28.113281 L 34.890625 28.113281 C 34.597656 29.707031 33.699219 31.058594 32.347656 31.960938 L 32.347656 35.160156 L 36.46875 35.160156 C 38.878906 32.941406 40.265625 29.671875 40.265625 25.789062 Z M 40.265625 25.789062 "/>
      </g>
      <g clipPath="url(#clip2)" clipRule="nonzero">
      <path style={{stroke: "none", fillRule: "nonzero", fill:"rgb(20.392157%,65.882355%,32.549021%)", fillOpacity: "1"}} d="M 28.035156 38.25 C 31.476562 38.25 34.359375 37.109375 36.46875 35.160156 L 32.347656 31.960938 C 31.207031 32.726562 29.75 33.179688 28.035156 33.179688 C 24.714844 33.179688 21.90625 30.9375 20.902344 27.921875 L 16.648438 27.921875 L 16.648438 31.226562 C 18.742188 35.394531 23.054688 38.25 28.035156 38.25 Z M 28.035156 38.25 "/>
      </g>
      <g clipPath="url(#clip3)" clipRule="nonzero">
      <path style={{stroke: "none", fillRule: "nonzero", fill:"rgb(98.431373%,73.725492%,1.568628%)", fillOpacity: "1"}} d="M 20.902344 27.921875 C 20.648438 27.15625 20.503906 26.339844 20.503906 25.5 C 20.503906 24.660156 20.648438 23.84375 20.902344 23.078125 L 20.902344 19.773438 L 16.648438 19.773438 C 15.785156 21.496094 15.292969 23.441406 15.292969 25.5 C 15.292969 27.558594 15.785156 29.503906 16.648438 31.226562 Z M 20.902344 27.921875 "/>
      </g>
      <g clipPath="url(#clip4)" clipRule="nonzero">
      <path style={{stroke: "none", fillRule: "nonzero", fill:"rgb(91.37255%,25.882354%,20.784314%)", fillOpacity: "1"}} d="M 28.035156 17.820312 C 29.90625 17.820312 31.585938 18.464844 32.90625 19.726562 L 36.558594 16.070312 C 34.355469 14.011719 31.46875 12.75 28.035156 12.75 C 23.054688 12.75 18.742188 15.605469 16.648438 19.773438 L 20.902344 23.078125 C 21.90625 20.0625 24.714844 17.820312 28.035156 17.820312 Z M 28.035156 17.820312 "/>
      </g>
      <path style={{stroke: "none", fillRule: "nonzero", fill:"rgb(12.156863%,12.156863%,12.156863%)", fillOpacity: "1"}} d="M 61.480469 28.605469 C 61.480469 28.34375 61.441406 28.113281 61.359375 27.910156 C 61.285156 27.707031 61.148438 27.519531 60.949219 27.351562 C 60.753906 27.183594 60.472656 27.019531 60.113281 26.863281 C 59.761719 26.699219 59.308594 26.535156 58.753906 26.367188 C 58.152344 26.179688 57.59375 25.972656 57.082031 25.746094 C 56.578125 25.515625 56.136719 25.25 55.757812 24.945312 C 55.382812 24.636719 55.089844 24.285156 54.878906 23.890625 C 54.667969 23.492188 54.566406 23.027344 54.566406 22.503906 C 54.566406 21.988281 54.671875 21.519531 54.886719 21.09375 C 55.109375 20.667969 55.417969 20.304688 55.820312 19.996094 C 56.226562 19.679688 56.707031 19.441406 57.257812 19.273438 C 57.808594 19.097656 58.417969 19.011719 59.085938 19.011719 C 60.027344 19.011719 60.835938 19.183594 61.515625 19.535156 C 62.203125 19.882812 62.726562 20.351562 63.09375 20.9375 C 63.464844 21.523438 63.652344 22.171875 63.652344 22.878906 L 61.480469 22.878906 C 61.480469 22.460938 61.390625 22.09375 61.210938 21.773438 C 61.039062 21.449219 60.769531 21.191406 60.410156 21.007812 C 60.054688 20.820312 59.605469 20.726562 59.058594 20.726562 C 58.542969 20.726562 58.113281 20.804688 57.769531 20.960938 C 57.429688 21.121094 57.171875 21.332031 57.003906 21.597656 C 56.835938 21.867188 56.75 22.167969 56.75 22.503906 C 56.75 22.742188 56.808594 22.960938 56.917969 23.160156 C 57.027344 23.351562 57.195312 23.53125 57.421875 23.699219 C 57.648438 23.863281 57.933594 24.015625 58.277344 24.160156 C 58.617188 24.308594 59.023438 24.445312 59.488281 24.578125 C 60.191406 24.789062 60.800781 25.023438 61.324219 25.277344 C 61.847656 25.527344 62.285156 25.8125 62.632812 26.132812 C 62.980469 26.449219 63.242188 26.8125 63.414062 27.222656 C 63.589844 27.621094 63.675781 28.078125 63.675781 28.589844 C 63.675781 29.125 63.570312 29.605469 63.355469 30.035156 C 63.140625 30.460938 62.832031 30.824219 62.429688 31.125 C 62.035156 31.421875 61.558594 31.652344 61.003906 31.8125 C 60.449219 31.972656 59.835938 32.050781 59.15625 32.050781 C 58.546875 32.050781 57.945312 31.96875 57.351562 31.804688 C 56.765625 31.640625 56.230469 31.394531 55.75 31.066406 C 55.269531 30.726562 54.882812 30.308594 54.601562 29.808594 C 54.316406 29.304688 54.171875 28.714844 54.171875 28.039062 L 56.359375 28.039062 C 56.359375 28.453125 56.429688 28.804688 56.570312 29.09375 C 56.714844 29.386719 56.914062 29.625 57.171875 29.808594 C 57.425781 29.988281 57.722656 30.125 58.058594 30.210938 C 58.402344 30.296875 58.765625 30.339844 59.15625 30.339844 C 59.667969 30.339844 60.09375 30.269531 60.4375 30.125 C 60.785156 29.976562 61.046875 29.773438 61.21875 29.511719 C 61.394531 29.25 61.480469 28.949219 61.480469 28.605469 Z M 67.648438 22.445312 L 67.648438 31.875 L 65.542969 31.875 L 65.542969 22.445312 Z M 65.402344 19.96875 C 65.402344 19.648438 65.507812 19.386719 65.714844 19.175781 C 65.929688 18.960938 66.226562 18.855469 66.605469 18.855469 C 66.976562 18.855469 67.269531 18.960938 67.484375 19.175781 C 67.699219 19.386719 67.804688 19.648438 67.804688 19.96875 C 67.804688 20.28125 67.699219 20.542969 67.484375 20.753906 C 67.269531 20.960938 66.976562 21.066406 66.605469 21.066406 C 66.226562 21.066406 65.929688 20.960938 65.714844 20.753906 C 65.507812 20.542969 65.402344 20.28125 65.402344 19.96875 Z M 75.984375 22.445312 L 77.894531 22.445312 L 77.894531 31.613281 C 77.894531 32.460938 77.714844 33.183594 77.351562 33.773438 C 76.992188 34.367188 76.492188 34.816406 75.847656 35.125 C 75.203125 35.441406 74.457031 35.597656 73.609375 35.597656 C 73.246094 35.597656 72.847656 35.542969 72.40625 35.441406 C 71.96875 35.335938 71.546875 35.167969 71.132812 34.933594 C 70.726562 34.707031 70.386719 34.410156 70.113281 34.035156 L 71.097656 32.800781 C 71.433594 33.199219 71.808594 33.492188 72.214844 33.679688 C 72.621094 33.863281 73.046875 33.957031 73.496094 33.957031 C 73.976562 33.957031 74.386719 33.867188 74.722656 33.6875 C 75.066406 33.511719 75.328125 33.253906 75.515625 32.914062 C 75.699219 32.570312 75.792969 32.152344 75.792969 31.65625 L 75.792969 24.578125 Z M 69.582031 27.265625 L 69.582031 27.082031 C 69.582031 26.367188 69.671875 25.714844 69.84375 25.128906 C 70.019531 24.535156 70.269531 24.027344 70.59375 23.605469 C 70.917969 23.171875 71.3125 22.84375 71.777344 22.617188 C 72.242188 22.386719 72.769531 22.269531 73.355469 22.269531 C 73.964844 22.269531 74.484375 22.378906 74.914062 22.601562 C 75.351562 22.820312 75.710938 23.140625 76.003906 23.550781 C 76.292969 23.957031 76.519531 24.445312 76.683594 25.015625 C 76.851562 25.578125 76.976562 26.207031 77.058594 26.898438 L 77.058594 27.480469 C 76.980469 28.15625 76.855469 28.773438 76.671875 29.328125 C 76.492188 29.886719 76.253906 30.371094 75.960938 30.777344 C 75.664062 31.183594 75.296875 31.496094 74.863281 31.71875 C 74.433594 31.9375 73.925781 32.050781 73.335938 32.050781 C 72.761719 32.050781 72.242188 31.929688 71.777344 31.691406 C 71.320312 31.453125 70.925781 31.121094 70.59375 30.691406 C 70.269531 30.257812 70.019531 29.753906 69.84375 29.171875 C 69.671875 28.585938 69.582031 27.949219 69.582031 27.265625 Z M 71.683594 27.082031 L 71.683594 27.265625 C 71.683594 27.695312 71.722656 28.09375 71.804688 28.46875 C 71.890625 28.839844 72.023438 29.167969 72.195312 29.453125 C 72.375 29.730469 72.601562 29.953125 72.875 30.113281 C 73.15625 30.269531 73.484375 30.351562 73.859375 30.351562 C 74.355469 30.351562 74.757812 30.246094 75.070312 30.035156 C 75.390625 29.828125 75.632812 29.546875 75.800781 29.191406 C 75.976562 28.832031 76.097656 28.429688 76.167969 27.988281 L 76.167969 26.410156 C 76.132812 26.066406 76.0625 25.746094 75.949219 25.453125 C 75.847656 25.15625 75.703125 24.898438 75.523438 24.675781 C 75.34375 24.449219 75.117188 24.273438 74.84375 24.152344 C 74.570312 24.023438 74.25 23.960938 73.878906 23.960938 C 73.5 23.960938 73.171875 24.042969 72.894531 24.207031 C 72.613281 24.367188 72.386719 24.589844 72.203125 24.875 C 72.03125 25.160156 71.898438 25.492188 71.8125 25.871094 C 71.726562 26.246094 71.683594 26.652344 71.683594 27.082031 Z M 82.152344 24.457031 L 82.152344 31.875 L 80.054688 31.875 L 80.054688 22.445312 L 82.03125 22.445312 Z M 81.777344 26.8125 L 81.097656 26.800781 C 81.105469 26.132812 81.199219 25.519531 81.378906 24.964844 C 81.5625 24.40625 81.820312 23.925781 82.144531 23.523438 C 82.476562 23.125 82.871094 22.816406 83.328125 22.601562 C 83.789062 22.378906 84.296875 22.269531 84.863281 22.269531 C 85.316406 22.269531 85.722656 22.335938 86.089844 22.460938 C 86.460938 22.582031 86.777344 22.785156 87.039062 23.0625 C 87.308594 23.34375 87.511719 23.707031 87.648438 24.152344 C 87.789062 24.59375 87.859375 25.136719 87.859375 25.78125 L 87.859375 31.875 L 85.75 31.875 L 85.75 25.773438 C 85.75 25.320312 85.683594 24.964844 85.550781 24.703125 C 85.421875 24.433594 85.234375 24.246094 84.984375 24.136719 C 84.738281 24.019531 84.433594 23.960938 84.070312 23.960938 C 83.710938 23.960938 83.386719 24.035156 83.101562 24.1875 C 82.816406 24.339844 82.578125 24.546875 82.378906 24.804688 C 82.1875 25.066406 82.039062 25.371094 81.933594 25.714844 C 81.832031 26.054688 81.777344 26.421875 81.777344 26.8125 Z M 96.691406 22.445312 L 96.691406 31.875 L 94.582031 31.875 L 94.582031 22.445312 Z M 94.445312 19.96875 C 94.445312 19.648438 94.546875 19.386719 94.757812 19.175781 C 94.972656 18.960938 95.269531 18.855469 95.644531 18.855469 C 96.019531 18.855469 96.3125 18.960938 96.527344 19.175781 C 96.742188 19.386719 96.847656 19.648438 96.847656 19.96875 C 96.847656 20.28125 96.742188 20.542969 96.527344 20.753906 C 96.3125 20.960938 96.019531 21.066406 95.644531 21.066406 C 95.269531 21.066406 94.972656 20.960938 94.757812 20.753906 C 94.546875 20.542969 94.445312 20.28125 94.445312 19.96875 Z M 101.074219 24.457031 L 101.074219 31.875 L 98.972656 31.875 L 98.972656 22.445312 L 100.949219 22.445312 Z M 100.699219 26.8125 L 100.019531 26.800781 C 100.023438 26.132812 100.117188 25.519531 100.296875 24.964844 C 100.484375 24.40625 100.738281 23.925781 101.0625 23.523438 C 101.394531 23.125 101.789062 22.816406 102.25 22.601562 C 102.707031 22.378906 103.21875 22.269531 103.78125 22.269531 C 104.234375 22.269531 104.644531 22.335938 105.011719 22.460938 C 105.382812 22.582031 105.699219 22.785156 105.960938 23.0625 C 106.226562 23.34375 106.429688 23.707031 106.570312 24.152344 C 106.707031 24.59375 106.777344 25.136719 106.777344 25.78125 L 106.777344 31.875 L 104.671875 31.875 L 104.671875 25.773438 C 104.671875 25.320312 104.605469 24.964844 104.46875 24.703125 C 104.34375 24.433594 104.152344 24.246094 103.902344 24.136719 C 103.660156 24.019531 103.355469 23.960938 102.988281 23.960938 C 102.628906 23.960938 102.308594 24.035156 102.023438 24.1875 C 101.738281 24.339844 101.496094 24.546875 101.300781 24.804688 C 101.109375 25.066406 100.960938 25.371094 100.855469 25.714844 C 100.75 26.054688 100.699219 26.421875 100.699219 26.8125 Z M 115.925781 29.785156 L 118.101562 22.445312 L 119.445312 22.445312 L 119.078125 24.640625 L 116.882812 31.875 L 115.679688 31.875 Z M 114.644531 22.445312 L 116.34375 29.816406 L 116.484375 31.875 L 115.140625 31.875 L 112.589844 22.445312 Z M 121.484375 29.730469 L 123.128906 22.445312 L 125.175781 22.445312 L 122.632812 31.875 L 121.292969 31.875 Z M 119.671875 22.445312 L 121.824219 29.695312 L 122.09375 31.875 L 120.890625 31.875 L 118.667969 24.632812 L 118.304688 22.445312 Z M 128.851562 22.445312 L 128.851562 31.875 L 126.746094 31.875 L 126.746094 22.445312 Z M 126.605469 19.96875 C 126.605469 19.648438 126.710938 19.386719 126.917969 19.175781 C 127.132812 18.960938 127.429688 18.855469 127.808594 18.855469 C 128.179688 18.855469 128.472656 18.960938 128.6875 19.175781 C 128.902344 19.386719 129.007812 19.648438 129.007812 19.96875 C 129.007812 20.28125 128.902344 20.542969 128.6875 20.753906 C 128.472656 20.960938 128.179688 21.066406 127.808594 21.066406 C 127.429688 21.066406 127.132812 20.960938 126.917969 20.753906 C 126.710938 20.542969 126.605469 20.28125 126.605469 19.96875 Z M 135.472656 22.445312 L 135.472656 23.976562 L 130.160156 23.976562 L 130.160156 22.445312 Z M 131.691406 20.136719 L 133.792969 20.136719 L 133.792969 29.269531 C 133.792969 29.558594 133.832031 29.785156 133.914062 29.941406 C 134 30.089844 134.121094 30.191406 134.269531 30.246094 C 134.421875 30.296875 134.597656 30.324219 134.800781 30.324219 C 134.945312 30.324219 135.085938 30.316406 135.21875 30.296875 C 135.351562 30.28125 135.460938 30.261719 135.542969 30.246094 L 135.550781 31.847656 C 135.375 31.902344 135.171875 31.949219 134.941406 31.988281 C 134.714844 32.027344 134.453125 32.050781 134.15625 32.050781 C 133.675781 32.050781 133.25 31.964844 132.875 31.796875 C 132.503906 31.621094 132.214844 31.339844 132.003906 30.949219 C 131.796875 30.5625 131.691406 30.042969 131.691406 29.398438 Z M 139.167969 18.488281 L 139.167969 31.875 L 137.074219 31.875 L 137.074219 18.488281 Z M 138.800781 26.8125 L 138.121094 26.800781 C 138.125 26.152344 138.214844 25.550781 138.390625 25 C 138.570312 24.445312 138.820312 23.96875 139.140625 23.558594 C 139.464844 23.148438 139.855469 22.832031 140.304688 22.609375 C 140.761719 22.382812 141.261719 22.269531 141.8125 22.269531 C 142.277344 22.269531 142.695312 22.335938 143.066406 22.460938 C 143.445312 22.589844 143.769531 22.796875 144.042969 23.082031 C 144.316406 23.359375 144.523438 23.726562 144.660156 24.179688 C 144.808594 24.625 144.878906 25.171875 144.878906 25.816406 L 144.878906 31.875 L 142.773438 31.875 L 142.773438 25.800781 C 142.773438 25.347656 142.707031 24.988281 142.570312 24.71875 C 142.445312 24.453125 142.253906 24.261719 142.003906 24.144531 C 141.753906 24.023438 141.449219 23.960938 141.089844 23.960938 C 140.714844 23.960938 140.378906 24.035156 140.089844 24.1875 C 139.804688 24.339844 139.566406 24.546875 139.375 24.804688 C 139.183594 25.066406 139.039062 25.371094 138.9375 25.714844 C 138.847656 26.054688 138.800781 26.421875 138.800781 26.8125 Z M 161.394531 25.390625 L 161.394531 30.238281 C 161.214844 30.476562 160.933594 30.734375 160.550781 31.019531 C 160.175781 31.300781 159.671875 31.539062 159.042969 31.746094 C 158.417969 31.949219 157.636719 32.050781 156.703125 32.050781 C 155.90625 32.050781 155.175781 31.914062 154.515625 31.648438 C 153.851562 31.375 153.28125 30.976562 152.796875 30.453125 C 152.320312 29.929688 151.953125 29.296875 151.691406 28.546875 C 151.429688 27.789062 151.300781 26.929688 151.300781 25.964844 L 151.300781 25.085938 C 151.300781 24.125 151.417969 23.273438 151.65625 22.523438 C 151.902344 21.765625 152.25 21.128906 152.703125 20.605469 C 153.15625 20.082031 153.703125 19.6875 154.339844 19.421875 C 154.984375 19.148438 155.714844 19.011719 156.527344 19.011719 C 157.566406 19.011719 158.425781 19.183594 159.105469 19.535156 C 159.789062 19.875 160.320312 20.351562 160.691406 20.960938 C 161.0625 21.574219 161.296875 22.269531 161.394531 23.054688 L 159.253906 23.054688 C 159.183594 22.613281 159.046875 22.21875 158.84375 21.871094 C 158.644531 21.519531 158.363281 21.246094 157.988281 21.050781 C 157.625 20.847656 157.148438 20.746094 156.5625 20.746094 C 156.058594 20.746094 155.613281 20.839844 155.226562 21.03125 C 154.847656 21.222656 154.527344 21.507812 154.269531 21.878906 C 154.019531 22.25 153.832031 22.703125 153.703125 23.238281 C 153.578125 23.773438 153.511719 24.382812 153.511719 25.066406 L 153.511719 25.964844 C 153.511719 26.664062 153.585938 27.28125 153.730469 27.820312 C 153.882812 28.363281 154.097656 28.820312 154.375 29.191406 C 154.660156 29.5625 155.003906 29.84375 155.410156 30.035156 C 155.820312 30.222656 156.277344 30.316406 156.789062 30.316406 C 157.289062 30.316406 157.695312 30.273438 158.015625 30.191406 C 158.335938 30.105469 158.589844 30.003906 158.773438 29.886719 C 158.964844 29.765625 159.113281 29.648438 159.21875 29.539062 L 159.21875 27.019531 L 156.578125 27.019531 L 156.578125 25.390625 Z M 163.207031 27.265625 L 163.207031 27.0625 C 163.207031 26.382812 163.308594 25.753906 163.503906 25.171875 C 163.699219 24.585938 163.988281 24.078125 164.355469 23.648438 C 164.734375 23.210938 165.195312 22.875 165.734375 22.636719 C 166.28125 22.390625 166.894531 22.269531 167.582031 22.269531 C 168.273438 22.269531 168.886719 22.390625 169.429688 22.636719 C 169.972656 22.875 170.4375 23.210938 170.8125 23.648438 C 171.191406 24.078125 171.476562 24.585938 171.675781 25.171875 C 171.875 25.753906 171.972656 26.382812 171.972656 27.0625 L 171.972656 27.265625 C 171.972656 27.945312 171.875 28.574219 171.675781 29.15625 C 171.476562 29.738281 171.191406 30.246094 170.8125 30.679688 C 170.4375 31.109375 169.976562 31.449219 169.4375 31.691406 C 168.894531 31.929688 168.285156 32.050781 167.597656 32.050781 C 166.90625 32.050781 166.289062 31.929688 165.742188 31.691406 C 165.203125 31.449219 164.746094 31.109375 164.367188 30.679688 C 163.988281 30.246094 163.699219 29.738281 163.503906 29.15625 C 163.308594 28.574219 163.207031 27.945312 163.207031 27.265625 Z M 165.308594 27.0625 L 165.308594 27.265625 C 165.308594 27.6875 165.351562 28.089844 165.4375 28.46875 C 165.523438 28.84375 165.664062 29.175781 165.847656 29.460938 C 166.03125 29.746094 166.269531 29.96875 166.5625 30.132812 C 166.851562 30.292969 167.199219 30.375 167.597656 30.375 C 167.988281 30.375 168.324219 30.292969 168.609375 30.132812 C 168.898438 29.96875 169.136719 29.746094 169.324219 29.460938 C 169.507812 29.175781 169.644531 28.84375 169.730469 28.46875 C 169.824219 28.089844 169.871094 27.6875 169.871094 27.265625 L 169.871094 27.0625 C 169.871094 26.644531 169.824219 26.25 169.730469 25.878906 C 169.644531 25.5 169.507812 25.167969 169.3125 24.875 C 169.128906 24.585938 168.890625 24.359375 168.601562 24.195312 C 168.316406 24.027344 167.976562 23.945312 167.582031 23.945312 C 167.1875 23.945312 166.84375 24.027344 166.554688 24.195312 C 166.269531 24.359375 166.03125 24.585938 165.847656 24.875 C 165.664062 25.167969 165.523438 25.5 165.4375 25.878906 C 165.351562 26.25 165.308594 26.644531 165.308594 27.0625 Z M 173.328125 27.265625 L 173.328125 27.0625 C 173.328125 26.382812 173.429688 25.753906 173.625 25.171875 C 173.824219 24.585938 174.109375 24.078125 174.480469 23.648438 C 174.859375 23.210938 175.316406 22.875 175.855469 22.636719 C 176.402344 22.390625 177.015625 22.269531 177.703125 22.269531 C 178.394531 22.269531 179.011719 22.390625 179.550781 22.636719 C 180.097656 22.875 180.558594 23.210938 180.933594 23.648438 C 181.3125 24.078125 181.601562 24.585938 181.796875 25.171875 C 181.996094 25.753906 182.09375 26.382812 182.09375 27.0625 L 182.09375 27.265625 C 182.09375 27.945312 181.996094 28.574219 181.796875 29.15625 C 181.601562 29.738281 181.3125 30.246094 180.933594 30.679688 C 180.558594 31.109375 180.097656 31.449219 179.558594 31.691406 C 179.019531 31.929688 178.40625 32.050781 177.722656 32.050781 C 177.027344 32.050781 176.410156 31.929688 175.867188 31.691406 C 175.324219 31.449219 174.867188 31.109375 174.488281 30.679688 C 174.109375 30.246094 173.824219 29.738281 173.625 29.15625 C 173.429688 28.574219 173.328125 27.945312 173.328125 27.265625 Z M 175.429688 27.0625 L 175.429688 27.265625 C 175.429688 27.6875 175.472656 28.089844 175.558594 28.46875 C 175.648438 28.84375 175.785156 29.175781 175.96875 29.460938 C 176.15625 29.746094 176.394531 29.96875 176.683594 30.132812 C 176.972656 30.292969 177.320312 30.375 177.722656 30.375 C 178.109375 30.375 178.445312 30.292969 178.730469 30.132812 C 179.023438 29.96875 179.257812 29.746094 179.445312 29.460938 C 179.632812 29.175781 179.765625 28.84375 179.855469 28.46875 C 179.949219 28.089844 179.992188 27.6875 179.992188 27.265625 L 179.992188 27.0625 C 179.992188 26.644531 179.949219 26.25 179.855469 25.878906 C 179.765625 25.5 179.628906 25.167969 179.4375 24.875 C 179.25 24.585938 179.011719 24.359375 178.722656 24.195312 C 178.4375 24.027344 178.097656 23.945312 177.703125 23.945312 C 177.308594 23.945312 176.964844 24.027344 176.675781 24.195312 C 176.390625 24.359375 176.15625 24.585938 175.96875 24.875 C 175.785156 25.167969 175.648438 25.5 175.558594 25.878906 C 175.472656 26.25 175.429688 26.644531 175.429688 27.0625 Z M 189.890625 22.445312 L 191.796875 22.445312 L 191.796875 31.613281 C 191.796875 32.460938 191.617188 33.183594 191.257812 33.773438 C 190.898438 34.367188 190.394531 34.816406 189.75 35.125 C 189.105469 35.441406 188.359375 35.597656 187.511719 35.597656 C 187.152344 35.597656 186.75 35.542969 186.308594 35.441406 C 185.875 35.335938 185.449219 35.167969 185.039062 34.933594 C 184.632812 34.707031 184.292969 34.410156 184.019531 34.035156 L 185.003906 32.800781 C 185.339844 33.199219 185.710938 33.492188 186.117188 33.679688 C 186.523438 33.863281 186.953125 33.957031 187.398438 33.957031 C 187.878906 33.957031 188.289062 33.867188 188.625 33.6875 C 188.96875 33.511719 189.234375 33.253906 189.417969 32.914062 C 189.605469 32.570312 189.699219 32.152344 189.699219 31.65625 L 189.699219 24.578125 Z M 183.488281 27.265625 L 183.488281 27.082031 C 183.488281 26.367188 183.574219 25.714844 183.75 25.128906 C 183.921875 24.535156 184.171875 24.027344 184.496094 23.605469 C 184.824219 23.171875 185.21875 22.84375 185.683594 22.617188 C 186.144531 22.386719 186.671875 22.269531 187.257812 22.269531 C 187.871094 22.269531 188.390625 22.378906 188.820312 22.601562 C 189.253906 22.820312 189.617188 23.140625 189.90625 23.550781 C 190.199219 23.957031 190.425781 24.445312 190.585938 25.015625 C 190.753906 25.578125 190.878906 26.207031 190.960938 26.898438 L 190.960938 27.480469 C 190.886719 28.15625 190.757812 28.773438 190.578125 29.328125 C 190.398438 29.886719 190.160156 30.371094 189.863281 30.777344 C 189.566406 31.183594 189.203125 31.496094 188.765625 31.71875 C 188.335938 31.9375 187.828125 32.050781 187.242188 32.050781 C 186.667969 32.050781 186.144531 31.929688 185.683594 31.691406 C 185.222656 31.453125 184.828125 31.121094 184.496094 30.691406 C 184.171875 30.257812 183.921875 29.753906 183.75 29.171875 C 183.574219 28.585938 183.488281 27.949219 183.488281 27.265625 Z M 185.585938 27.082031 L 185.585938 27.265625 C 185.585938 27.695312 185.628906 28.09375 185.707031 28.46875 C 185.796875 28.839844 185.925781 29.167969 186.101562 29.453125 C 186.28125 29.730469 186.507812 29.953125 186.78125 30.113281 C 187.058594 30.269531 187.386719 30.351562 187.765625 30.351562 C 188.257812 30.351562 188.660156 30.246094 188.976562 30.035156 C 189.292969 29.828125 189.539062 29.546875 189.707031 29.191406 C 189.882812 28.832031 190.003906 28.429688 190.074219 27.988281 L 190.074219 26.410156 C 190.039062 26.066406 189.964844 25.746094 189.855469 25.453125 C 189.75 25.15625 189.609375 24.898438 189.425781 24.675781 C 189.246094 24.449219 189.019531 24.273438 188.75 24.152344 C 188.476562 24.023438 188.152344 23.960938 187.78125 23.960938 C 187.402344 23.960938 187.078125 24.042969 186.796875 24.207031 C 186.519531 24.367188 186.289062 24.589844 186.109375 24.875 C 185.933594 25.160156 185.804688 25.492188 185.71875 25.871094 C 185.628906 26.246094 185.585938 26.652344 185.585938 27.082031 Z M 196.222656 18.488281 L 196.222656 31.875 L 194.113281 31.875 L 194.113281 18.488281 Z M 202.675781 32.050781 C 201.980469 32.050781 201.351562 31.9375 200.785156 31.710938 C 200.230469 31.476562 199.753906 31.15625 199.359375 30.742188 C 198.96875 30.328125 198.671875 29.84375 198.460938 29.285156 C 198.253906 28.730469 198.148438 28.128906 198.148438 27.480469 L 198.148438 27.132812 C 198.148438 26.394531 198.253906 25.726562 198.46875 25.128906 C 198.683594 24.53125 198.984375 24.019531 199.367188 23.59375 C 199.75 23.164062 200.203125 22.835938 200.726562 22.609375 C 201.25 22.382812 201.816406 22.269531 202.425781 22.269531 C 203.097656 22.269531 203.6875 22.382812 204.191406 22.609375 C 204.699219 22.835938 205.117188 23.15625 205.449219 23.570312 C 205.785156 23.976562 206.035156 24.460938 206.195312 25.023438 C 206.367188 25.589844 206.449219 26.210938 206.449219 26.890625 L 206.449219 27.789062 L 199.167969 27.789062 L 199.167969 26.28125 L 204.375 26.28125 L 204.375 26.113281 C 204.363281 25.734375 204.289062 25.382812 204.148438 25.050781 C 204.015625 24.71875 203.808594 24.453125 203.53125 24.25 C 203.253906 24.046875 202.878906 23.945312 202.417969 23.945312 C 202.066406 23.945312 201.757812 24.019531 201.484375 24.171875 C 201.21875 24.316406 200.992188 24.527344 200.8125 24.804688 C 200.632812 25.085938 200.492188 25.421875 200.394531 25.816406 C 200.300781 26.207031 200.253906 26.644531 200.253906 27.132812 L 200.253906 27.480469 C 200.253906 27.894531 200.3125 28.277344 200.421875 28.632812 C 200.535156 28.980469 200.707031 29.285156 200.925781 29.546875 C 201.148438 29.808594 201.414062 30.015625 201.726562 30.167969 C 202.042969 30.3125 202.398438 30.382812 202.796875 30.382812 C 203.304688 30.382812 203.753906 30.28125 204.148438 30.078125 C 204.542969 29.875 204.886719 29.589844 205.179688 29.214844 L 206.285156 30.289062 C 206.078125 30.585938 205.816406 30.871094 205.492188 31.144531 C 205.167969 31.410156 204.765625 31.628906 204.296875 31.796875 C 203.832031 31.964844 203.292969 32.050781 202.675781 32.050781 Z M 202.675781 32.050781 "/>
      </g>
      </svg>
    </button>
  );
}