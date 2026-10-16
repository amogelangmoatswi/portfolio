"use client";

import React, { useEffect, useState } from "react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

export function GradientBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 bg-background" />;
  }

  const shaderProps = {
    animate: "on",
    axesHelper: "off",
    brightness: 0.9,
    cAzimuthAngle: 180,
    cDistance: 2.11,
    cPolarAngle: 90,
    cameraZoom: 1,
    color1: "#000000",
    color2: "#00008f",
    color3: "#00002f",
    destination: "onCanvas",
    embedMode: "off",
    envPreset: "city",
    format: "gif",
    fov: 50,
    frameRate: 10,
    gizmoHelper: "hide",
    grain: "on",
    lightType: "3d",
    pixelDensity: 1,
    positionX: -2.1,
    positionY: 0,
    positionZ: 0,
    range: "disabled",
    rangeEnd: 33.1,
    rangeStart: 6.7,
    reflection: 0.1,
    rotationX: 0,
    rotationY: 10,
    rotationZ: 50,
    shader: "defaults",
    type: "plane",
    uAmplitude: 1,
    uDensity: 1.3,
    uFrequency: 5.5,
    uSpeed: 0.2,
    uStrength: 4,
    uTime: 6.7,
    wireframe: false,
  };

  return (
    <ShaderGradientCanvas
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
      pixelDensity={1}
      fov={50}
    >
      <ShaderGradient {...(shaderProps as any)} />
    </ShaderGradientCanvas>
  );
}
