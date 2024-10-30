import { cn } from "@/utils/cn";

export default function GrowFollowersSection({
  gridPosition,
}: {
  gridPosition?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-10 relative flex h-[220px] w-full flex-col items-center justify-end gap-4 overflow-hidden bg-primary-500 p-4 text-neutral-white md:h-full md:flex-row md:justify-center md:p-6",
        gridPosition,
      )}
    >
      <GrowFollowersIllustration />

      <p className="text-preset-2 max-w-[16ch] text-center md:max-w-[10ch] md:text-start">
        Grow followers with non-stop content.
      </p>
    </section>
  );
}

function GrowFollowersIllustration() {
  return (
    <svg
      width="228"
      height="202"
      viewBox="0 0 228 202"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="0.890152"
        width="195.918"
        height="188.939"
        rx="14.8767"
        fill="white"
      />
      <path
        d="M27.6913 41.5457V31.7457H33.6553V32.7117H28.8673V36.1557H32.9413V37.1077H28.8673V41.5457H27.6913ZM37.543 41.7137C36.8897 41.7137 36.3017 41.5644 35.779 41.2657C35.2563 40.967 34.841 40.547 34.533 40.0057C34.2343 39.455 34.085 38.811 34.085 38.0737C34.085 37.3364 34.239 36.697 34.547 36.1557C34.855 35.605 35.2703 35.1804 35.793 34.8817C36.325 34.583 36.9177 34.4337 37.571 34.4337C38.2243 34.4337 38.8123 34.583 39.335 34.8817C39.8577 35.1804 40.2683 35.605 40.567 36.1557C40.875 36.697 41.029 37.3364 41.029 38.0737C41.029 38.811 40.875 39.455 40.567 40.0057C40.259 40.547 39.839 40.967 39.307 41.2657C38.7843 41.5644 38.1963 41.7137 37.543 41.7137ZM37.543 40.7057C37.9443 40.7057 38.3177 40.6077 38.663 40.4117C39.0083 40.2157 39.2883 39.9217 39.503 39.5297C39.7177 39.1377 39.825 38.6524 39.825 38.0737C39.825 37.495 39.7177 37.0097 39.503 36.6177C39.2977 36.2257 39.0223 35.9317 38.677 35.7357C38.3317 35.5397 37.963 35.4417 37.571 35.4417C37.1697 35.4417 36.7963 35.5397 36.451 35.7357C36.1057 35.9317 35.8257 36.2257 35.611 36.6177C35.3963 37.0097 35.289 37.495 35.289 38.0737C35.289 38.6524 35.3963 39.1377 35.611 39.5297C35.8257 39.9217 36.101 40.2157 36.437 40.4117C36.7823 40.6077 37.151 40.7057 37.543 40.7057ZM42.2442 41.5457V31.4657H43.4202V41.5457H42.2442ZM44.9277 41.5457V31.4657H46.1037V41.5457H44.9277ZM50.7752 41.7137C50.1219 41.7137 49.5339 41.5644 49.0112 41.2657C48.4885 40.967 48.0732 40.547 47.7652 40.0057C47.4665 39.455 47.3172 38.811 47.3172 38.0737C47.3172 37.3364 47.4712 36.697 47.7792 36.1557C48.0872 35.605 48.5025 35.1804 49.0252 34.8817C49.5572 34.583 50.1499 34.4337 50.8032 34.4337C51.4565 34.4337 52.0445 34.583 52.5672 34.8817C53.0899 35.1804 53.5005 35.605 53.7992 36.1557C54.1072 36.697 54.2612 37.3364 54.2612 38.0737C54.2612 38.811 54.1072 39.455 53.7992 40.0057C53.4912 40.547 53.0712 40.967 52.5392 41.2657C52.0165 41.5644 51.4285 41.7137 50.7752 41.7137ZM50.7752 40.7057C51.1765 40.7057 51.5499 40.6077 51.8952 40.4117C52.2405 40.2157 52.5205 39.9217 52.7352 39.5297C52.9499 39.1377 53.0572 38.6524 53.0572 38.0737C53.0572 37.495 52.9499 37.0097 52.7352 36.6177C52.5299 36.2257 52.2545 35.9317 51.9092 35.7357C51.5639 35.5397 51.1952 35.4417 50.8032 35.4417C50.4019 35.4417 50.0285 35.5397 49.6832 35.7357C49.3379 35.9317 49.0579 36.2257 48.8432 36.6177C48.6285 37.0097 48.5212 37.495 48.5212 38.0737C48.5212 38.6524 48.6285 39.1377 48.8432 39.5297C49.0579 39.9217 49.3332 40.2157 49.6692 40.4117C50.0145 40.6077 50.3832 40.7057 50.7752 40.7057ZM56.6166 41.5457L54.5866 34.6017H55.7626L57.2326 40.0477L58.8566 34.6017H60.1866L61.8246 40.0477L63.2806 34.6017H64.4706L62.4406 41.5457H61.2366L59.5286 35.8197L57.8206 41.5457H56.6166ZM68.2135 41.7137C67.5508 41.7137 66.9628 41.5644 66.4495 41.2657C65.9362 40.9577 65.5302 40.533 65.2315 39.9917C64.9422 39.4504 64.7975 38.811 64.7975 38.0737C64.7975 37.3457 64.9422 36.711 65.2315 36.1697C65.5208 35.619 65.9222 35.1944 66.4355 34.8957C66.9582 34.5877 67.5602 34.4337 68.2415 34.4337C68.9135 34.4337 69.4922 34.5877 69.9775 34.8957C70.4722 35.1944 70.8502 35.591 71.1115 36.0857C71.3728 36.5804 71.5035 37.1124 71.5035 37.6817C71.5035 37.7844 71.4988 37.887 71.4895 37.9897C71.4895 38.0924 71.4895 38.209 71.4895 38.3397H65.9595C65.9875 38.8717 66.1088 39.315 66.3235 39.6697C66.5475 40.015 66.8228 40.2764 67.1495 40.4537C67.4855 40.631 67.8402 40.7197 68.2135 40.7197C68.6988 40.7197 69.1048 40.6077 69.4315 40.3837C69.7582 40.1597 69.9962 39.8564 70.1455 39.4737H71.3075C71.1208 40.1177 70.7615 40.6544 70.2295 41.0837C69.7068 41.5037 69.0348 41.7137 68.2135 41.7137ZM68.2135 35.4277C67.6535 35.4277 67.1542 35.6004 66.7155 35.9457C66.2862 36.2817 66.0388 36.7764 65.9735 37.4297H70.3415C70.3135 36.8044 70.0988 36.3144 69.6975 35.9597C69.2962 35.605 68.8015 35.4277 68.2135 35.4277ZM72.6422 41.5457V34.6017H73.7062L73.8042 35.9317C74.0189 35.4744 74.3455 35.1104 74.7842 34.8397C75.2229 34.569 75.7642 34.4337 76.4082 34.4337V35.6657H76.0862C75.6755 35.6657 75.2975 35.7404 74.9522 35.8897C74.6069 36.0297 74.3315 36.2724 74.1262 36.6177C73.9209 36.963 73.8182 37.439 73.8182 38.0457V41.5457H72.6422ZM84.8772 41.7137C83.9626 41.7137 83.1599 41.5037 82.4692 41.0837C81.7786 40.6544 81.2419 40.0617 80.8592 39.3057C80.4766 38.5404 80.2852 37.6584 80.2852 36.6597C80.2852 35.661 80.4766 34.779 80.8592 34.0137C81.2512 33.2484 81.8019 32.651 82.5112 32.2217C83.2299 31.7924 84.0746 31.5777 85.0452 31.5777C86.1466 31.5777 87.0612 31.8437 87.7892 32.3757C88.5266 32.9077 89.0026 33.6404 89.2172 34.5737H87.8592C87.7286 33.9857 87.4159 33.519 86.9212 33.1737C86.4359 32.8284 85.8106 32.6557 85.0452 32.6557C84.3266 32.6557 83.7012 32.819 83.1692 33.1457C82.6372 33.463 82.2219 33.9204 81.9232 34.5177C81.6339 35.115 81.4892 35.829 81.4892 36.6597C81.4892 37.4904 81.6339 38.2044 81.9232 38.8017C82.2126 39.399 82.6139 39.861 83.1272 40.1877C83.6406 40.505 84.2379 40.6637 84.9192 40.6637C85.9646 40.6637 86.7532 40.3604 87.2852 39.7537C87.8172 39.1377 88.1206 38.2977 88.1952 37.2337H85.3672V36.3097H89.3992V41.5457H88.3212L88.2232 39.9357C87.8686 40.505 87.4346 40.9437 86.9212 41.2517C86.4079 41.5597 85.7266 41.7137 84.8772 41.7137ZM90.7689 41.5457V34.6017H91.8329L91.9309 35.9317C92.1456 35.4744 92.4723 35.1104 92.9109 34.8397C93.3496 34.569 93.8909 34.4337 94.5349 34.4337V35.6657H94.2129C93.8023 35.6657 93.4243 35.7404 93.0789 35.8897C92.7336 36.0297 92.4583 36.2724 92.2529 36.6177C92.0476 36.963 91.9449 37.439 91.9449 38.0457V41.5457H90.7689ZM98.3391 41.7137C97.6858 41.7137 97.0978 41.5644 96.5751 41.2657C96.0524 40.967 95.6371 40.547 95.3291 40.0057C95.0304 39.455 94.8811 38.811 94.8811 38.0737C94.8811 37.3364 95.0351 36.697 95.3431 36.1557C95.6511 35.605 96.0664 35.1804 96.5891 34.8817C97.1211 34.583 97.7138 34.4337 98.3671 34.4337C99.0204 34.4337 99.6084 34.583 100.131 34.8817C100.654 35.1804 101.064 35.605 101.363 36.1557C101.671 36.697 101.825 37.3364 101.825 38.0737C101.825 38.811 101.671 39.455 101.363 40.0057C101.055 40.547 100.635 40.967 100.103 41.2657C99.5804 41.5644 98.9924 41.7137 98.3391 41.7137ZM98.3391 40.7057C98.7404 40.7057 99.1138 40.6077 99.4591 40.4117C99.8044 40.2157 100.084 39.9217 100.299 39.5297C100.514 39.1377 100.621 38.6524 100.621 38.0737C100.621 37.495 100.514 37.0097 100.299 36.6177C100.094 36.2257 99.8184 35.9317 99.4731 35.7357C99.1278 35.5397 98.7591 35.4417 98.3671 35.4417C97.9658 35.4417 97.5924 35.5397 97.2471 35.7357C96.9018 35.9317 96.6218 36.2257 96.4071 36.6177C96.1924 37.0097 96.0851 37.495 96.0851 38.0737C96.0851 38.6524 96.1924 39.1377 96.4071 39.5297C96.6218 39.9217 96.8971 40.2157 97.2331 40.4117C97.5784 40.6077 97.9471 40.7057 98.3391 40.7057ZM104.18 41.5457L102.15 34.6017H103.326L104.796 40.0477L106.42 34.6017H107.75L109.388 40.0477L110.844 34.6017H112.034L110.004 41.5457H108.8L107.092 35.8197L105.384 41.5457H104.18ZM115.659 41.5457C115.025 41.5457 114.525 41.3917 114.161 41.0837C113.797 40.7757 113.615 40.2204 113.615 39.4177V35.5957H112.411V34.6017H113.615L113.769 32.9357H114.791V34.6017H116.835V35.5957H114.791V39.4177C114.791 39.8564 114.88 40.155 115.057 40.3137C115.235 40.463 115.547 40.5377 115.995 40.5377H116.723V41.5457H115.659ZM117.909 41.5457V31.4657H119.085V35.7917C119.319 35.3624 119.65 35.031 120.079 34.7977C120.509 34.555 120.975 34.4337 121.479 34.4337C122.282 34.4337 122.926 34.6857 123.411 35.1897C123.897 35.6844 124.139 36.4497 124.139 37.4857V41.5457H122.977V37.6117C122.977 36.165 122.394 35.4417 121.227 35.4417C120.621 35.4417 120.112 35.661 119.701 36.0997C119.291 36.529 119.085 37.145 119.085 37.9477V41.5457H117.909Z"
        fill="#9E9E9E"
      />
      <path
        d="M28.2365 72.8768V70.7685C29.4941 69.7699 30.6962 68.762 31.8428 67.7448C32.9894 66.7276 34.0065 65.729 34.8942 64.7488C35.8004 63.7501 36.5124 62.7792 37.0303 61.836C37.5481 60.8744 37.807 59.9497 37.807 59.062C37.807 58.4702 37.7053 57.9154 37.5019 57.3975C37.2984 56.8612 36.9655 56.4359 36.5032 56.1215C36.0409 55.7886 35.4213 55.6221 34.6446 55.6221C33.4795 55.6221 32.601 55.992 32.0092 56.7318C31.4359 57.4715 31.1585 58.3592 31.177 59.3949H28.3197C28.3382 58.0263 28.6249 56.8797 29.1797 55.955C29.753 55.0303 30.5112 54.3276 31.4544 53.8467C32.4161 53.3659 33.498 53.1255 34.7001 53.1255C36.5309 53.1255 37.992 53.6433 39.0831 54.679C40.1927 55.6961 40.7475 57.1201 40.7475 58.951C40.7475 60.0421 40.4794 61.124 39.943 62.1967C39.4252 63.2693 38.7409 64.305 37.8902 65.3036C37.058 66.2838 36.1611 67.2085 35.1994 68.0777C34.2377 68.9469 33.3223 69.7329 32.4531 70.4356H41.3301V72.8768H28.2365ZM50.3861 73.2097C48.6292 73.2097 47.1127 72.7936 45.8366 71.9614C44.5791 71.1107 43.6081 69.9363 42.9239 68.4383C42.2581 66.9218 41.9252 65.1649 41.9252 63.1676C41.9252 61.1703 42.2581 59.4226 42.9239 57.9246C43.6081 56.4081 44.5791 55.2338 45.8366 54.4015C47.1127 53.5508 48.6292 53.1255 50.3861 53.1255C52.143 53.1255 53.6502 53.5508 54.9078 54.4015C56.1654 55.2338 57.1271 56.4081 57.7928 57.9246C58.4771 59.4226 58.8193 61.1703 58.8193 63.1676C58.8193 65.1649 58.4771 66.9218 57.7928 68.4383C57.1271 69.9363 56.1654 71.1107 54.9078 71.9614C53.6502 72.7936 52.143 73.2097 50.3861 73.2097ZM50.3861 70.5743C51.4402 70.5743 52.3742 70.2784 53.1879 69.6866C54.0201 69.0948 54.6674 68.2441 55.1297 67.1345C55.5921 66.0249 55.8233 64.7026 55.8233 63.1676C55.8233 61.6326 55.5921 60.3103 55.1297 59.2007C54.6674 58.0911 54.0201 57.2403 53.1879 56.6485C52.3742 56.0567 51.4402 55.7608 50.3861 55.7608C49.3135 55.7608 48.3703 56.0567 47.5565 56.6485C46.7428 57.2403 46.1048 58.0911 45.6424 59.2007C45.1801 60.3103 44.9489 61.6326 44.9489 63.1676C44.9489 64.7026 45.1801 66.0249 45.6424 67.1345C46.1048 68.2441 46.7428 69.0948 47.5565 69.6866C48.3703 70.2784 49.3135 70.5743 50.3861 70.5743ZM57.8449 76.1502L59.4538 69.6034H62.3666L59.8144 76.1502H57.8449ZM70.7193 73.2097C69.2953 73.2097 68.0932 72.9415 67.1131 72.4052C66.1329 71.8689 65.3376 71.1569 64.7274 70.2692C64.1356 69.3815 63.7102 68.3828 63.4513 67.2732C63.1924 66.1636 63.0629 65.0262 63.0629 63.8611C63.0629 61.7158 63.3588 59.8387 63.9506 58.2298C64.5609 56.6208 65.4301 55.3725 66.5582 54.4848C67.6864 53.5786 69.0549 53.1255 70.6639 53.1255C71.9399 53.1255 73.0311 53.3751 73.9373 53.8745C74.8434 54.3738 75.5462 55.0396 76.0455 55.8718C76.5634 56.704 76.8778 57.6102 76.9887 58.5904H74.2424C74.076 57.6287 73.6783 56.889 73.0495 56.3711C72.4208 55.8533 71.6163 55.5944 70.6361 55.5944C69.2861 55.5944 68.1672 56.2324 67.2795 57.5085C66.4103 58.7661 65.9479 60.7079 65.8925 63.334C66.3363 62.5203 67.0206 61.8268 67.9453 61.2535C68.8885 60.6802 69.9703 60.3935 71.1909 60.3935C72.2821 60.3935 73.2992 60.6524 74.2424 61.1703C75.2041 61.6881 75.9808 62.4186 76.5726 63.3618C77.1829 64.2865 77.4881 65.3868 77.4881 66.6629C77.4881 67.791 77.2106 68.8544 76.6558 69.8531C76.101 70.8517 75.315 71.6655 74.2979 72.2943C73.2992 72.9046 72.1064 73.2097 70.7193 73.2097ZM70.5529 70.6576C71.3296 70.6576 72.0231 70.4911 72.6334 70.1582C73.2437 69.8253 73.7246 69.3722 74.076 68.7989C74.4273 68.2071 74.603 67.5414 74.603 66.8016C74.603 65.618 74.2147 64.6748 73.4379 63.9721C72.6797 63.2693 71.7088 62.9179 70.5252 62.9179C69.7484 62.9179 69.0456 63.0936 68.4169 63.445C67.8066 63.7964 67.3257 64.268 66.9743 64.8598C66.623 65.4331 66.4473 66.0711 66.4473 66.7739C66.4473 67.5321 66.623 68.2071 66.9743 68.7989C67.3442 69.3722 67.8343 69.8253 68.4446 70.1582C69.0734 70.4911 69.7762 70.6576 70.5529 70.6576ZM88.3024 72.8768V68.9931H78.5654V66.6629L87.8308 53.4584H91.2151V66.441H93.9337V68.9931H91.2151V72.8768H88.3024ZM81.7556 66.441H88.4688V56.704L81.7556 66.441ZM94.684 72.8768V70.7685C95.9416 69.7699 97.1437 68.762 98.2903 67.7448C99.4369 66.7276 100.454 65.729 101.342 64.7488C102.248 63.7501 102.96 62.7792 103.478 61.836C103.996 60.8744 104.255 59.9497 104.255 59.062C104.255 58.4702 104.153 57.9154 103.949 57.3975C103.746 56.8612 103.413 56.4359 102.951 56.1215C102.488 55.7886 101.869 55.6221 101.092 55.6221C99.927 55.6221 99.0485 55.992 98.4567 56.7318C97.8834 57.4715 97.606 58.3592 97.6245 59.3949H94.7672C94.7857 58.0263 95.0724 56.8797 95.6272 55.955C96.2005 55.0303 96.9587 54.3276 97.9019 53.8467C98.8636 53.3659 99.9455 53.1255 101.148 53.1255C102.978 53.1255 104.439 53.6433 105.531 54.679C106.64 55.6961 107.195 57.1201 107.195 58.951C107.195 60.0421 106.927 61.124 106.391 62.1967C105.873 63.2693 105.188 64.305 104.338 65.3036C103.506 66.2838 102.609 67.2085 101.647 68.0777C100.685 68.9469 99.7698 69.7329 98.9006 70.4356H107.778V72.8768H94.684Z"
        fill="#121212"
      />
      <rect
        x="129.935"
        y="54.7113"
        width="39.3278"
        height="17.3311"
        rx="6.66389"
        fill="#DAFFE9"
      />
      <path
        d="M137.078 64.4096V63.6979H138.59V62.2825H139.325V63.6979H140.837V64.4096H139.325V65.833H138.59V64.4096H137.078ZM144.034 66.3768V65.2573H141.227V64.5856L143.898 60.7791H144.874V64.5216H145.658V65.2573H144.874V66.3768H144.034ZM142.147 64.5216H144.082V61.7148L142.147 64.5216ZM147.945 66.4728C147.577 66.4728 147.263 66.4008 147.001 66.2569C146.74 66.1129 146.535 65.921 146.386 65.6811C146.242 65.4412 146.154 65.18 146.122 64.8974H146.913C146.961 65.1747 147.076 65.3879 147.257 65.5372C147.439 65.6864 147.67 65.7611 147.953 65.7611C148.342 65.7611 148.662 65.5798 148.913 65.2173C149.169 64.8495 149.304 64.287 149.32 63.53C149.193 63.7646 148.993 63.9645 148.721 64.1298C148.454 64.295 148.145 64.3776 147.793 64.3776C147.479 64.3776 147.183 64.303 146.905 64.1537C146.628 64.0045 146.404 63.7966 146.234 63.53C146.063 63.2581 145.978 62.9382 145.978 62.5704C145.978 62.2452 146.058 61.9387 146.218 61.6508C146.378 61.3629 146.602 61.131 146.889 60.9551C147.183 60.7738 147.529 60.6832 147.929 60.6832C148.34 60.6832 148.686 60.7605 148.969 60.9151C149.251 61.0697 149.478 61.2749 149.648 61.5308C149.819 61.7867 149.942 62.0746 150.016 62.3945C150.096 62.7143 150.136 63.0422 150.136 63.3781C150.136 63.9965 150.048 64.5376 149.872 65.0014C149.702 65.4652 149.454 65.8277 149.129 66.0889C148.803 66.3448 148.409 66.4728 147.945 66.4728ZM147.985 63.65C148.209 63.65 148.409 63.5993 148.585 63.498C148.761 63.3967 148.899 63.2634 149.001 63.0982C149.107 62.9276 149.161 62.741 149.161 62.5384C149.161 62.3198 149.107 62.1279 149.001 61.9627C148.899 61.7921 148.758 61.6588 148.577 61.5628C148.401 61.4669 148.201 61.4189 147.977 61.4189C147.753 61.4189 147.553 61.4669 147.377 61.5628C147.201 61.6588 147.06 61.7921 146.953 61.9627C146.852 62.1279 146.802 62.3172 146.802 62.5304C146.802 62.8716 146.913 63.1435 147.137 63.3461C147.361 63.5487 147.644 63.65 147.985 63.65ZM152.958 66.4728C152.451 66.4728 152.014 66.3528 151.646 66.1129C151.284 65.8677 151.004 65.5292 150.807 65.0973C150.615 64.6602 150.519 64.1537 150.519 63.578C150.519 63.0022 150.615 62.4984 150.807 62.0666C151.004 61.6295 151.284 61.2909 151.646 61.051C152.014 60.8058 152.451 60.6832 152.958 60.6832C153.464 60.6832 153.899 60.8058 154.261 61.051C154.624 61.2909 154.901 61.6295 155.093 62.0666C155.29 62.4984 155.389 63.0022 155.389 63.578C155.389 64.1537 155.29 64.6602 155.093 65.0973C154.901 65.5292 154.624 65.8677 154.261 66.1129C153.899 66.3528 153.464 66.4728 152.958 66.4728ZM152.958 65.7131C153.261 65.7131 153.531 65.6278 153.765 65.4572C154.005 65.2866 154.192 65.0414 154.325 64.7215C154.458 64.4016 154.525 64.0205 154.525 63.578C154.525 63.1355 154.458 62.7543 154.325 62.4345C154.192 62.1146 154.005 61.8694 153.765 61.6988C153.531 61.5282 153.261 61.4429 152.958 61.4429C152.648 61.4429 152.377 61.5282 152.142 61.6988C151.907 61.8694 151.723 62.1146 151.59 62.4345C151.457 62.7543 151.39 63.1355 151.39 63.578C151.39 64.0205 151.457 64.4016 151.59 64.7215C151.723 65.0414 151.907 65.2866 152.142 65.4572C152.377 65.6278 152.648 65.7131 152.958 65.7131ZM157.013 63.45C156.763 63.45 156.536 63.3941 156.333 63.2821C156.136 63.1702 155.979 63.0129 155.862 62.8103C155.744 62.6024 155.686 62.3545 155.686 62.0666C155.686 61.7841 155.744 61.5415 155.862 61.3389C155.979 61.131 156.139 60.9711 156.341 60.8591C156.544 60.7472 156.771 60.6912 157.021 60.6912C157.266 60.6912 157.488 60.7472 157.685 60.8591C157.887 60.9711 158.047 61.131 158.165 61.3389C158.282 61.5415 158.341 61.7841 158.341 62.0666C158.341 62.3545 158.282 62.6024 158.165 62.8103C158.047 63.0129 157.887 63.1702 157.685 63.2821C157.488 63.3941 157.264 63.45 157.013 63.45ZM156.613 66.3768L159.82 60.7791H160.652L157.453 66.3768H156.613ZM157.013 62.8423C157.184 62.8423 157.33 62.7783 157.453 62.6504C157.581 62.5171 157.645 62.3225 157.645 62.0666C157.645 61.8107 157.584 61.6188 157.461 61.4909C157.338 61.3576 157.189 61.2909 157.013 61.2909C156.843 61.2909 156.693 61.3576 156.565 61.4909C156.437 61.6188 156.373 61.8107 156.373 62.0666C156.373 62.3225 156.435 62.5171 156.557 62.6504C156.685 62.7783 156.837 62.8423 157.013 62.8423ZM160.3 66.4728C160.049 66.4728 159.823 66.4168 159.62 66.3048C159.423 66.1929 159.266 66.0356 159.148 65.833C159.031 65.6251 158.972 65.3772 158.972 65.0894C158.972 64.8068 159.031 64.5616 159.148 64.3537C159.266 64.1457 159.425 63.9858 159.628 63.8739C159.831 63.7619 160.057 63.7059 160.308 63.7059C160.553 63.7059 160.774 63.7619 160.971 63.8739C161.174 63.9858 161.334 64.1457 161.451 64.3537C161.569 64.5616 161.627 64.8068 161.627 65.0894C161.627 65.3772 161.569 65.6251 161.451 65.833C161.334 66.0356 161.174 66.1929 160.971 66.3048C160.774 66.4168 160.55 66.4728 160.3 66.4728ZM160.3 65.857C160.47 65.857 160.617 65.7931 160.74 65.6651C160.868 65.5372 160.931 65.3452 160.931 65.0894C160.931 64.8335 160.87 64.6415 160.748 64.5136C160.625 64.3803 160.476 64.3137 160.3 64.3137C160.129 64.3137 159.98 64.3803 159.852 64.5136C159.724 64.6415 159.66 64.8335 159.66 65.0894C159.66 65.3452 159.721 65.5372 159.844 65.6651C159.972 65.7931 160.124 65.857 160.3 65.857Z"
        fill="#0E803B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.9851 119.192C39.5856 119.192 43.315 122.921 43.315 127.522L43.315 154.844C43.315 159.444 39.5856 163.174 34.9851 163.174C30.3847 163.174 26.6553 159.444 26.6553 154.844L26.6553 127.522C26.6553 122.921 30.3847 119.192 34.9851 119.192Z"
        fill="#7551DC"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M66.4724 109.196C71.0729 109.196 74.8023 112.926 74.8023 117.526L74.8023 154.844C74.8023 159.444 71.0729 163.174 66.4724 163.174C61.872 163.174 58.1426 159.444 58.1426 154.844L58.1426 117.526C58.1426 112.926 61.872 109.196 66.4724 109.196Z"
        fill="#7551DC"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M97.9588 104.532C102.559 104.532 106.289 108.261 106.289 112.861L106.289 154.844C106.289 159.444 102.559 163.174 97.9588 163.174C93.3583 163.174 89.6289 159.444 89.6289 154.844L89.6289 112.861C89.6289 108.261 93.3583 104.532 97.9588 104.532Z"
        fill="#7551DC"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M129.446 88.5358C134.047 88.5358 137.776 92.2652 137.776 96.8657V154.844C137.776 159.444 134.047 163.174 129.446 163.174C124.846 163.174 121.116 159.444 121.116 154.844V96.8657C121.116 92.2652 124.846 88.5358 129.446 88.5358Z"
        fill="#7551DC"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M160.932 88.5382C165.533 88.5382 169.262 92.2676 169.262 96.8681L169.262 154.844C169.262 159.444 165.533 163.174 160.932 163.174C156.332 163.174 152.603 159.444 152.603 154.844L152.603 96.8681C152.603 92.2676 156.332 88.5382 160.932 88.5382Z"
        fill="#7551DC"
      />
      <rect
        x="47"
        y="133.36"
        width="180.684"
        height="67.7501"
        rx="33.8751"
        fill="white"
      />
      <circle cx="80.8749" cy="167.235" r="21.2704" fill="#FFCC6A" />
      <path
        d="M71.6836 167.607L80.9837 158.307M80.9837 158.307L90.2839 167.607M80.9837 158.307V176.907"
        stroke="#7551DC"
        strokeWidth="3.15117"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M110.859 160.134V151.734H115.971V152.562H111.867V155.514H115.359V156.33H111.867V160.134H110.859ZM119.303 160.278C118.743 160.278 118.239 160.15 117.791 159.894C117.343 159.638 116.987 159.278 116.723 158.814C116.467 158.342 116.339 157.79 116.339 157.158C116.339 156.526 116.471 155.978 116.735 155.514C116.999 155.042 117.355 154.678 117.803 154.422C118.259 154.166 118.767 154.038 119.327 154.038C119.887 154.038 120.391 154.166 120.839 154.422C121.287 154.678 121.639 155.042 121.895 155.514C122.159 155.978 122.291 156.526 122.291 157.158C122.291 157.79 122.159 158.342 121.895 158.814C121.631 159.278 121.271 159.638 120.815 159.894C120.367 160.15 119.863 160.278 119.303 160.278ZM119.303 159.414C119.647 159.414 119.967 159.33 120.263 159.162C120.559 158.994 120.799 158.742 120.983 158.406C121.167 158.07 121.259 157.654 121.259 157.158C121.259 156.662 121.167 156.246 120.983 155.91C120.807 155.574 120.571 155.322 120.275 155.154C119.979 154.986 119.663 154.902 119.327 154.902C118.983 154.902 118.663 154.986 118.367 155.154C118.071 155.322 117.831 155.574 117.647 155.91C117.463 156.246 117.371 156.662 117.371 157.158C117.371 157.654 117.463 158.07 117.647 158.406C117.831 158.742 118.067 158.994 118.355 159.162C118.651 159.33 118.967 159.414 119.303 159.414ZM123.333 160.134V151.494H124.341V160.134H123.333ZM125.633 160.134V151.494H126.641V160.134H125.633ZM130.645 160.278C130.085 160.278 129.581 160.15 129.133 159.894C128.685 159.638 128.329 159.278 128.065 158.814C127.809 158.342 127.681 157.79 127.681 157.158C127.681 156.526 127.813 155.978 128.077 155.514C128.341 155.042 128.697 154.678 129.145 154.422C129.601 154.166 130.109 154.038 130.669 154.038C131.229 154.038 131.733 154.166 132.181 154.422C132.629 154.678 132.981 155.042 133.237 155.514C133.501 155.978 133.633 156.526 133.633 157.158C133.633 157.79 133.501 158.342 133.237 158.814C132.973 159.278 132.613 159.638 132.157 159.894C131.709 160.15 131.205 160.278 130.645 160.278ZM130.645 159.414C130.989 159.414 131.309 159.33 131.605 159.162C131.901 158.994 132.141 158.742 132.325 158.406C132.509 158.07 132.601 157.654 132.601 157.158C132.601 156.662 132.509 156.246 132.325 155.91C132.149 155.574 131.913 155.322 131.617 155.154C131.321 154.986 131.005 154.902 130.669 154.902C130.325 154.902 130.005 154.986 129.709 155.154C129.413 155.322 129.173 155.574 128.989 155.91C128.805 156.246 128.713 156.662 128.713 157.158C128.713 157.654 128.805 158.07 128.989 158.406C129.173 158.742 129.409 158.994 129.697 159.162C129.993 159.33 130.309 159.414 130.645 159.414ZM135.652 160.134L133.912 154.182H134.92L136.18 158.85L137.572 154.182H138.712L140.116 158.85L141.364 154.182H142.384L140.644 160.134H139.612L138.148 155.226L136.684 160.134H135.652ZM145.592 160.278C145.024 160.278 144.52 160.15 144.08 159.894C143.64 159.63 143.292 159.266 143.036 158.802C142.788 158.338 142.664 157.79 142.664 157.158C142.664 156.534 142.788 155.99 143.036 155.526C143.284 155.054 143.628 154.69 144.068 154.434C144.516 154.17 145.032 154.038 145.616 154.038C146.192 154.038 146.688 154.17 147.104 154.434C147.528 154.69 147.852 155.03 148.076 155.454C148.3 155.878 148.412 156.334 148.412 156.822C148.412 156.91 148.408 156.998 148.4 157.086C148.4 157.174 148.4 157.274 148.4 157.386H143.66C143.684 157.842 143.788 158.222 143.972 158.526C144.164 158.822 144.4 159.046 144.68 159.198C144.968 159.35 145.272 159.426 145.592 159.426C146.008 159.426 146.356 159.33 146.636 159.138C146.916 158.946 147.12 158.686 147.248 158.358H148.244C148.084 158.91 147.776 159.37 147.32 159.738C146.872 160.098 146.296 160.278 145.592 160.278ZM145.592 154.89C145.112 154.89 144.684 155.038 144.308 155.334C143.94 155.622 143.728 156.046 143.672 156.606H147.416C147.392 156.07 147.208 155.65 146.864 155.346C146.52 155.042 146.096 154.89 145.592 154.89ZM149.388 160.134V154.182H150.3L150.384 155.322C150.568 154.93 150.848 154.618 151.224 154.386C151.6 154.154 152.064 154.038 152.616 154.038V155.094H152.34C151.988 155.094 151.664 155.158 151.368 155.286C151.072 155.406 150.836 155.614 150.66 155.91C150.484 156.206 150.396 156.614 150.396 157.134V160.134H149.388ZM155.667 160.278C154.955 160.278 154.363 160.098 153.891 159.738C153.419 159.378 153.143 158.89 153.063 158.274H154.095C154.159 158.586 154.323 158.858 154.587 159.09C154.859 159.314 155.223 159.426 155.679 159.426C156.103 159.426 156.415 159.338 156.615 159.162C156.815 158.978 156.915 158.762 156.915 158.514C156.915 158.154 156.783 157.914 156.519 157.794C156.263 157.674 155.899 157.566 155.427 157.47C155.107 157.406 154.787 157.314 154.467 157.194C154.147 157.074 153.879 156.906 153.663 156.69C153.447 156.466 153.339 156.174 153.339 155.814C153.339 155.294 153.531 154.87 153.915 154.542C154.307 154.206 154.835 154.038 155.499 154.038C156.131 154.038 156.647 154.198 157.047 154.518C157.455 154.83 157.691 155.278 157.755 155.862H156.759C156.719 155.558 156.587 155.322 156.363 155.154C156.147 154.978 155.855 154.89 155.487 154.89C155.127 154.89 154.847 154.966 154.647 155.118C154.455 155.27 154.359 155.47 154.359 155.718C154.359 155.958 154.483 156.146 154.731 156.282C154.987 156.418 155.331 156.534 155.763 156.63C156.131 156.71 156.479 156.81 156.807 156.93C157.143 157.042 157.415 157.214 157.623 157.446C157.839 157.67 157.947 157.998 157.947 158.43C157.955 158.966 157.751 159.41 157.335 159.762C156.927 160.106 156.371 160.278 155.667 160.278Z"
        fill="#9E9E9E"
      />
      <path
        d="M116.171 184.576C115.237 184.576 114.391 184.409 113.631 184.076C112.884 183.729 112.284 183.249 111.831 182.636C111.391 182.022 111.171 181.302 111.171 180.476C111.171 179.636 111.404 178.882 111.871 178.216C112.351 177.549 112.984 177.096 113.771 176.856C113.064 176.576 112.517 176.169 112.131 175.636C111.744 175.089 111.551 174.489 111.551 173.836C111.551 173.156 111.731 172.536 112.091 171.976C112.451 171.402 112.971 170.949 113.651 170.616C114.344 170.269 115.184 170.096 116.171 170.096C117.157 170.096 117.991 170.269 118.671 170.616C119.364 170.949 119.891 171.402 120.251 171.976C120.611 172.536 120.791 173.156 120.791 173.836C120.791 174.476 120.591 175.076 120.191 175.636C119.804 176.182 119.257 176.589 118.551 176.856C119.337 177.109 119.964 177.569 120.431 178.236C120.911 178.889 121.151 179.636 121.151 180.476C121.151 181.302 120.931 182.022 120.491 182.636C120.051 183.249 119.451 183.729 118.691 184.076C117.944 184.409 117.104 184.576 116.171 184.576ZM116.171 176.176C116.944 176.176 117.551 175.976 117.991 175.576C118.444 175.176 118.671 174.662 118.671 174.036C118.671 173.329 118.451 172.789 118.011 172.416C117.571 172.042 116.957 171.856 116.171 171.856C115.384 171.856 114.771 172.042 114.331 172.416C113.891 172.789 113.671 173.329 113.671 174.036C113.671 174.662 113.891 175.176 114.331 175.576C114.771 175.976 115.384 176.176 116.171 176.176ZM116.171 182.776C117.131 182.776 117.851 182.549 118.331 182.096C118.811 181.629 119.051 181.036 119.051 180.316C119.051 179.516 118.791 178.902 118.271 178.476C117.764 178.036 117.064 177.816 116.171 177.816C115.277 177.816 114.571 178.036 114.051 178.476C113.531 178.902 113.271 179.516 113.271 180.316C113.271 181.036 113.511 181.629 113.991 182.096C114.484 182.549 115.211 182.776 116.171 182.776ZM126.766 184.576C125.846 184.576 125.059 184.396 124.406 184.036C123.752 183.676 123.239 183.196 122.866 182.596C122.506 181.996 122.286 181.342 122.206 180.636H124.186C124.306 181.329 124.592 181.862 125.046 182.236C125.499 182.609 126.079 182.796 126.786 182.796C127.759 182.796 128.559 182.342 129.186 181.436C129.826 180.516 130.166 179.109 130.206 177.216C129.886 177.802 129.386 178.302 128.706 178.716C128.039 179.129 127.266 179.336 126.386 179.336C125.599 179.336 124.859 179.149 124.166 178.776C123.472 178.402 122.912 177.882 122.486 177.216C122.059 176.536 121.846 175.736 121.846 174.816C121.846 174.002 122.046 173.236 122.446 172.516C122.846 171.796 123.406 171.216 124.126 170.776C124.859 170.322 125.726 170.096 126.726 170.096C127.752 170.096 128.619 170.289 129.326 170.676C130.032 171.062 130.599 171.576 131.026 172.216C131.452 172.856 131.759 173.576 131.946 174.376C132.146 175.176 132.246 175.996 132.246 176.836C132.246 178.382 132.026 179.736 131.586 180.896C131.159 182.056 130.539 182.962 129.726 183.616C128.912 184.256 127.926 184.576 126.766 184.576ZM126.866 177.516C127.426 177.516 127.926 177.389 128.366 177.136C128.806 176.882 129.152 176.549 129.406 176.136C129.672 175.709 129.806 175.242 129.806 174.736C129.806 174.189 129.672 173.709 129.406 173.296C129.152 172.869 128.799 172.536 128.346 172.296C127.906 172.056 127.406 171.936 126.846 171.936C126.286 171.936 125.786 172.056 125.346 172.296C124.906 172.536 124.552 172.869 124.286 173.296C124.032 173.709 123.906 174.182 123.906 174.716C123.906 175.569 124.186 176.249 124.746 176.756C125.306 177.262 126.012 177.516 126.866 177.516ZM132.242 186.696L133.402 181.976H135.502L133.662 186.696H132.242ZM141.264 184.576C140.278 184.576 139.424 184.402 138.704 184.056C137.984 183.696 137.411 183.209 136.984 182.596C136.571 181.969 136.318 181.262 136.224 180.476H138.304C138.438 181.142 138.771 181.696 139.304 182.136C139.838 182.562 140.498 182.776 141.284 182.776C141.871 182.776 142.378 182.636 142.804 182.356C143.231 182.062 143.564 181.676 143.804 181.196C144.044 180.716 144.164 180.176 144.164 179.576C144.164 178.629 143.898 177.876 143.364 177.316C142.831 176.742 142.158 176.456 141.344 176.456C140.651 176.456 140.058 176.622 139.564 176.956C139.071 177.276 138.711 177.682 138.484 178.176H136.464L137.664 170.336H145.224V172.196H139.264L138.544 175.936C138.851 175.589 139.271 175.302 139.804 175.076C140.351 174.836 140.964 174.716 141.644 174.716C142.591 174.716 143.404 174.936 144.084 175.376C144.764 175.802 145.284 176.382 145.644 177.116C146.018 177.849 146.204 178.662 146.204 179.556C146.204 180.489 146.004 181.336 145.604 182.096C145.204 182.856 144.631 183.462 143.884 183.916C143.151 184.356 142.278 184.576 141.264 184.576ZM151.989 184.576C151.082 184.576 150.255 184.416 149.509 184.096C148.775 183.762 148.189 183.262 147.749 182.596C147.309 181.929 147.075 181.096 147.049 180.096H149.149C149.175 180.842 149.429 181.476 149.909 181.996C150.402 182.502 151.095 182.756 151.989 182.756C152.842 182.756 153.495 182.522 153.949 182.056C154.402 181.576 154.629 180.982 154.629 180.276C154.629 179.422 154.322 178.789 153.709 178.376C153.109 177.962 152.369 177.756 151.489 177.756H150.449V175.996H151.509C152.295 175.996 152.929 175.809 153.409 175.436C153.902 175.062 154.149 174.536 154.149 173.856C154.149 173.282 153.955 172.816 153.569 172.456C153.195 172.096 152.662 171.916 151.969 171.916C151.249 171.916 150.682 172.129 150.269 172.556C149.855 172.969 149.629 173.489 149.589 174.116H147.489C147.515 173.302 147.715 172.596 148.089 171.996C148.475 171.396 149.002 170.929 149.669 170.596C150.335 170.262 151.102 170.096 151.969 170.096C152.902 170.096 153.682 170.262 154.309 170.596C154.949 170.916 155.429 171.356 155.749 171.916C156.082 172.462 156.249 173.062 156.249 173.716C156.249 174.462 156.042 175.116 155.629 175.676C155.215 176.236 154.662 176.609 153.969 176.796C154.769 176.969 155.429 177.362 155.949 177.976C156.469 178.576 156.729 179.356 156.729 180.316C156.729 181.089 156.549 181.802 156.189 182.456C155.829 183.096 155.295 183.609 154.589 183.996C153.882 184.382 153.015 184.576 151.989 184.576ZM157.865 184.336V182.816C158.771 182.096 159.638 181.369 160.465 180.636C161.291 179.902 162.025 179.182 162.665 178.476C163.318 177.756 163.831 177.056 164.205 176.376C164.578 175.682 164.765 175.016 164.765 174.376C164.765 173.949 164.691 173.549 164.545 173.176C164.398 172.789 164.158 172.482 163.825 172.256C163.491 172.016 163.045 171.896 162.485 171.896C161.645 171.896 161.011 172.162 160.585 172.696C160.171 173.229 159.971 173.869 159.985 174.616H157.925C157.938 173.629 158.145 172.802 158.545 172.136C158.958 171.469 159.505 170.962 160.185 170.616C160.878 170.269 161.658 170.096 162.525 170.096C163.845 170.096 164.898 170.469 165.685 171.216C166.485 171.949 166.885 172.976 166.885 174.296C166.885 175.082 166.691 175.862 166.305 176.636C165.931 177.409 165.438 178.156 164.825 178.876C164.225 179.582 163.578 180.249 162.885 180.876C162.191 181.502 161.531 182.069 160.905 182.576H167.305V184.336H157.865Z"
        fill="#121212"
      />
      <rect
        x="181.575"
        y="169.235"
        width="33.5039"
        height="16.2016"
        rx="5.25195"
        fill="#DAFFE9"
      />
      <path
        d="M187.307 178.368V177.657H188.818V176.241H189.554V177.657H191.065V178.368H189.554V179.792H188.818V178.368H187.307ZM192.288 180.336V175.698L191.384 175.905V175.282L192.623 174.738H193.167V180.336H192.288ZM193.793 180.336V179.728C194.155 179.44 194.502 179.149 194.832 178.856C195.163 178.563 195.456 178.275 195.712 177.993C195.973 177.705 196.178 177.425 196.328 177.153C196.477 176.876 196.552 176.609 196.552 176.353C196.552 176.183 196.522 176.023 196.464 175.873C196.405 175.719 196.309 175.596 196.176 175.506C196.042 175.41 195.864 175.362 195.64 175.362C195.304 175.362 195.051 175.468 194.88 175.682C194.715 175.895 194.635 176.151 194.64 176.449H193.817C193.822 176.055 193.905 175.724 194.065 175.458C194.23 175.191 194.448 174.988 194.72 174.85C194.998 174.711 195.309 174.642 195.656 174.642C196.184 174.642 196.605 174.791 196.919 175.09C197.239 175.383 197.399 175.793 197.399 176.321C197.399 176.636 197.322 176.948 197.167 177.257C197.018 177.566 196.821 177.865 196.576 178.153C196.336 178.435 196.077 178.702 195.8 178.952C195.523 179.203 195.259 179.429 195.008 179.632H197.567V180.336H193.793ZM200.258 180.432C199.751 180.432 199.314 180.312 198.946 180.072C198.584 179.826 198.304 179.488 198.107 179.056C197.915 178.619 197.819 178.113 197.819 177.537C197.819 176.961 197.915 176.457 198.107 176.025C198.304 175.588 198.584 175.25 198.946 175.01C199.314 174.765 199.751 174.642 200.258 174.642C200.764 174.642 201.199 174.765 201.561 175.01C201.924 175.25 202.201 175.588 202.393 176.025C202.59 176.457 202.689 176.961 202.689 177.537C202.689 178.113 202.59 178.619 202.393 179.056C202.201 179.488 201.924 179.826 201.561 180.072C201.199 180.312 200.764 180.432 200.258 180.432ZM200.258 179.672C200.562 179.672 200.831 179.587 201.065 179.416C201.305 179.245 201.492 179 201.625 178.68C201.758 178.36 201.825 177.979 201.825 177.537C201.825 177.094 201.758 176.713 201.625 176.393C201.492 176.073 201.305 175.828 201.065 175.658C200.831 175.487 200.562 175.402 200.258 175.402C199.948 175.402 199.677 175.487 199.442 175.658C199.207 175.828 199.024 176.073 198.89 176.393C198.757 176.713 198.69 177.094 198.69 177.537C198.69 177.979 198.757 178.36 198.89 178.68C199.024 179 199.207 179.245 199.442 179.416C199.677 179.587 199.948 179.672 200.258 179.672ZM204.313 177.409C204.063 177.409 203.836 177.353 203.633 177.241C203.436 177.129 203.279 176.972 203.162 176.769C203.044 176.561 202.986 176.313 202.986 176.025C202.986 175.743 203.044 175.5 203.162 175.298C203.279 175.09 203.439 174.93 203.641 174.818C203.844 174.706 204.071 174.65 204.321 174.65C204.566 174.65 204.788 174.706 204.985 174.818C205.187 174.93 205.347 175.09 205.465 175.298C205.582 175.5 205.641 175.743 205.641 176.025C205.641 176.313 205.582 176.561 205.465 176.769C205.347 176.972 205.187 177.129 204.985 177.241C204.788 177.353 204.564 177.409 204.313 177.409ZM203.913 180.336L207.12 174.738H207.952L204.753 180.336H203.913ZM204.313 176.801C204.484 176.801 204.63 176.737 204.753 176.609C204.881 176.476 204.945 176.281 204.945 176.025C204.945 175.77 204.884 175.578 204.761 175.45C204.638 175.316 204.489 175.25 204.313 175.25C204.143 175.25 203.993 175.316 203.865 175.45C203.737 175.578 203.673 175.77 203.673 176.025C203.673 176.281 203.735 176.476 203.857 176.609C203.985 176.737 204.137 176.801 204.313 176.801ZM207.6 180.432C207.349 180.432 207.123 180.376 206.92 180.264C206.723 180.152 206.566 179.994 206.448 179.792C206.331 179.584 206.272 179.336 206.272 179.048C206.272 178.766 206.331 178.52 206.448 178.312C206.566 178.105 206.725 177.945 206.928 177.833C207.131 177.721 207.357 177.665 207.608 177.665C207.853 177.665 208.074 177.721 208.272 177.833C208.474 177.945 208.634 178.105 208.751 178.312C208.869 178.52 208.927 178.766 208.927 179.048C208.927 179.336 208.869 179.584 208.751 179.792C208.634 179.994 208.474 180.152 208.272 180.264C208.074 180.376 207.85 180.432 207.6 180.432ZM207.6 179.816C207.77 179.816 207.917 179.752 208.04 179.624C208.168 179.496 208.232 179.304 208.232 179.048C208.232 178.792 208.17 178.6 208.048 178.472C207.925 178.339 207.776 178.272 207.6 178.272C207.429 178.272 207.28 178.339 207.152 178.472C207.024 178.6 206.96 178.792 206.96 179.048C206.96 179.304 207.021 179.496 207.144 179.624C207.272 179.752 207.424 179.816 207.6 179.816Z"
        fill="#0E803B"
      />
    </svg>
  );
}
