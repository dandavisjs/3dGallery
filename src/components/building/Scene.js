/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: RVECH (https://sketchfab.com/RVECH)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/6560ab865d0f4374916a15ab538d87fb
title: stairs
*/

import React, { useRef } from 'react'
import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import floor from '../../img/floor3.jpg'

export default function Model(props) {
  const texture = useLoader(THREE.TextureLoader, floor)

  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.stairs_AH} >
          <meshLambertMaterial attach="material" map={texture} />
          </mesh>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
